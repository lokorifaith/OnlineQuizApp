<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quizapp";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$action = $_POST['action'];

if ($action == 'getQuestions') {
    $sql = "SELECT id, question, option1, option2, option3, option4, answer FROM questions";
    $result = $conn->query($sql);
    $questions = [];

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $questions[] = $row;
        }
    }
    echo json_encode($questions);
} elseif ($action == 'submitAnswers') {
    $answers = $_POST['answers'];
    $score = 0;

    foreach ($answers as $id => $userAnswer) {
        $sql = "SELECT answer FROM questions WHERE id = $id";
        $result = $conn->query($sql);
        $row = $result->fetch_assoc();

        if ($row['answer'] == $userAnswer) {
            $score++;
        }
    }

    echo json_encode(['score' => $score]);
}

$conn->close();
?>
