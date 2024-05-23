<!DOCTYPE html>
<html>
<head>
  <title>Online Quiz App</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
  <script src="script.js"></script>
</head>
<body>
  <div id="quiz-container">
    <h1>Online Quiz App</h1>
    <div id="question-container">
      <p id="what is 2+2?"></p>
      <div id="options-container">
        <input type="radio" name="option" id="option1">
        <label for="option1" id="option1-label"></label>
        <br>
        <input type="radio" name="option" id="option2">
        <label for="option2" id="option2-label"></label>
        <br>
        <input type="radio" name="option" id="option3">
        <label for="option3" id="option3-label"></label>
        <br>
        <input type="radio" name="option" id="option4">
        <label for="option4" id="option4-label"></label>
      </div>
      
    </div>
    <button id="submit-button">Submit</button>
    <p id="score-text"></p>
  </div>
</body>
</html>
