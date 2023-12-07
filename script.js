// script.js
function validateLogin() {
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the username and password are correct (replace 'your_username' and 'your_password' with actual values)
    if (username === 'emmanuel' && password === '091600') {
        // Redirect to edit.html after successful login
        window.location.href = 'edit.html';
    } else {
        document.getElementById('loginMessage').innerHTML = 'Incorrect username or password. Please try again.';
    }
}
