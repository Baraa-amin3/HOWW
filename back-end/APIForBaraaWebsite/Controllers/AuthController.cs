// AuthController.cs
// This file contains the API endpoints for user registration and login.

using Howw.Data;
using Howw.Models;
using Howw.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using BCrypt.Net; // You'll need to add the BCrypt.Net-Next package

namespace Howw.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Registers a new user.
        /// </summary>
        /// <param name="registerDto">The user registration data.</param>
        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto registerDto)
        {
            // Check if a user with the same email already exists
            if (await _context.Users.AnyAsync(u => u.Email == registerDto.Email))
            {
                return BadRequest("A user with this email already exists.");
            }

            // Create a new user object
            var user = new User
            {
                FirstName = registerDto.FirstName,
                SecondName = registerDto.SecondName,
                Email = registerDto.Email,
                // Hash the password before saving
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(registerDto.Password),
                BirthDate = registerDto.BirthDate,
                Gender = registerDto.Gender
            };

            // Add the user to the database
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "User registered successfully!" });
        }

        /// <summary>
        /// Logs in a user.
        /// </summary>
        /// <param name="loginDto">The user login data.</param>
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
        {
            // Find the user by email
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == loginDto.Email);

            // Check if the user exists and if the password is correct
            if (user == null || !BCrypt.Net.BCrypt.Verify(loginDto.Password, user.PasswordHash))
            {
                return Unauthorized("Invalid credentials.");
            }

            // In a real-world application, you would generate a JWT token here.
            // For simplicity, we'll just return a success message.
            return Ok(new { message = "Login successful!" });
        }
    }
}
