<?php
session_start();

// Hardcoded username and password (replace with your actual credentials)
$correct_username = "your_username";
$correct_password = "your_password";

// Get user input
$entered_username = $_POST['emm'];
$entered_password = $_POST['0916'];

// Check if the provided username and password are correct
if ($entered_username == $correct_username && $entered_password == $correct_password) {
    // Set a session variable to indicate a successful login
    $_SESSION['logged_in'] = true;

    // Redirect to a protected page or home page
    header('Location: protected-page.php');
    exit();
} else {
    // Incorrect username or password, display an error message
    echo '<p style="color: red;">Incorrect username or password. Please try again.</p>';
}
?>
