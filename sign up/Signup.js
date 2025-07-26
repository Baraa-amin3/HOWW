        // Get the form and message box by ID
        const signupForm = document.getElementById('signupForm');
        const messageDiv = document.getElementById('message');

        // This function runs when the form is submitted
        signupForm.addEventListener('submit', async function (event) {
            // 1. Prevent page from reloading
            event.preventDefault();

            // 2. Get data from all input fields
            const firstName = document.getElementById('firstName').value;
            const secondName = document.getElementById('secondName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const birthDate = document.getElementById('birthDate').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;

            if (password !== confirmPassword) {
                messageDiv.textContent = 'Passwords do not match!';
                messageDiv.style.color = 'red';
                return;
            }

            // 3. Create an object with the data
            const userData = {
                firstName, secondName, email, password, birthDate, gender
            };

            // 4. Send the data to the back-end
            const apiUrl = 'https://localhost:7001/api/auth/register';

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData)
                });

                // 5. Handle the response from the server
                if (response.ok) {
                    messageDiv.textContent = 'Account created successfully! Redirecting...';
                    messageDiv.style.color = 'green';

                    // Wait 2 seconds, then redirect to the main page
                    setTimeout(() => {
                        window.location.href = '../index.html';
                    }, 2000); // 2000 milliseconds = 2 seconds
                } else {
                    const errorText = await response.text();
                    messageDiv.textContent = `Error: ${errorText}`;
                    messageDiv.style.color = 'red';
                }
            } catch (error) {
                messageDiv.textContent = 'Failed to connect to the server. Is it running?';
                messageDiv.style.color = 'red';
            }
        });