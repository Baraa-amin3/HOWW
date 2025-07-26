// Dtos.cs
// This file defines the Data Transfer Objects used for API requests.

using System;
using System.ComponentModel.DataAnnotations;

namespace Howw.Dtos
{
    /// <summary>
    /// DTO for user registration.
    /// </summary>
    public class RegisterDto
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string SecondName { get; set; }
        [Required, EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public DateTime BirthDate { get; set; }
        [Required]
        public string Gender { get; set; }
    }

    /// <summary>
    /// DTO for user login.
    /// </summary>
    public class LoginDto
    {
        [Required, EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
