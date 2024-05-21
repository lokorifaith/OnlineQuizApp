<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quizapp";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT id FROM users WHERE username = '$username' and password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $_SESSION['login_user'] = $username;
        header("location: index.html");
    } else {
        $error = "Your Login Name or Password is invalid";
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
</head>
<body>
    <div>
        <form action="" method="post">
            <label>Username :</label>
            <input type="text" name="username">
            <label>Password :</label>
            <input type="password" name="password">
            <input type="submit" value=" Login ">
        </form>
    </div>
</body>
</html>
