        // Get the form and message box by ID
        const loginForm = document.getElementById('loginForm');
        const messageDiv = document.getElementById('message');

        // This function runs when the form is submitted
        loginForm.addEventListener('submit', async function (event) {
            // 1. Prevent the page from reloading
            event.preventDefault();

            // 2. Get the values from input fields
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // 3. Create an object with the input data
            const loginData = {
                email: email,
                password: password
            };

            // 4. Send the data to the backend API
            const apiUrl = 'https://localhost:7001/api/auth/login';

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginData)
                });

                // 5. Handle the response from the server
                if (response.ok) {
                    // *** Make sure this path is correct ***
                    // If the main page is in the parent folder, use:
                    window.location.replace('../index.html');

                    // Or if it's in the same folder:
                    // window.location.href = './main.html';
                } else {
                    messageDiv.textContent = 'Invalid credentials. Please try again.';
                    messageDiv.style.color = 'red';
                }
            } catch (error) {
                messageDiv.textContent = 'Failed to connect to the server. Is it running?';
                messageDiv.style.color = 'red';
            }
        });