document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const submitButton = document.getElementById('submit');
    const resultContainer = document.getElementById('result');

    // Sample questions for demonstration
    const quizQuestions = [
        {
            question: "What is 2 + 2?",
            options: ["2", "3", "4", "5"],
            answer: "4"
        },
        {
            question: "Is the sky blue?",
            options: ["True", "False"],
            answer: "True"
        }
    ];

    function displayQuiz() {
        const output = [];
        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const options = [];
            for (let option in currentQuestion.options) {
                options.push(
                    `<li>
                        <input type="radio" name="question${questionNumber}" value="${currentQuestion.options[option]}">
                        ${currentQuestion.options[option]}
                    </li>`
                );
            }
            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <ul class="options">${options.join('')}</ul>`
            );
        });
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.options');
        let numCorrect = 0;

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.answer) {
                numCorrect++;
            }
        });

        resultContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
    }

    displayQuiz();

    submitButton.addEventListener('click', showResults);
});





document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const submitButton = document.getElementById('submit');
    const resultContainer = document.getElementById('result');
    let timer;

    const quizQuestions = [
        {
            question: "What is 2 + 2?",
            options: ["2", "3", "4", "5"],
            answer: "4"
        },
        {
            question: "Is the sky blue?",
            options: ["True", "False"],
            answer: "True"
        }
    ];

    function displayQuiz() {
        const output = [];
        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const options = [];
            for (let option in currentQuestion.options) {
                options.push(
                    `<li>
                        <input type="radio" name="question${questionNumber}" value="${currentQuestion.options[option]}">
                        ${currentQuestion.options[option]}
                    </li>`
                );
            }
            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <ul class="options">${options.join('')}</ul>`
            );
        });
        quizContainer.innerHTML = output.join('');
        startTimer(30); // 30 seconds for demonstration
    }

    function startTimer(seconds) {
        const countdown = document.createElement('div');
        countdown.id = 'countdown';
        quizContainer.appendChild(countdown);

        timer = setInterval(() => {
            countdown.innerHTML = `Time left: ${seconds}s`;
            seconds--;

            if (seconds < 0) {
                clearInterval(timer);
                showResults();
            }
        }, 1000);
