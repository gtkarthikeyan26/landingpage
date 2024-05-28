document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let isValid = true;

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Check if username is valid
    const username = document.getElementById('username').value;
    if (username.trim() === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
        isValid = false;
    }

    // Check if email is valid
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address';
        isValid = false;
    }

    // Check if passwords match and are valid
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    // If all validations pass, redirect to the thank you page
    if (isValid) {
        window.location.href = 'thankyou.html';
    }
});
