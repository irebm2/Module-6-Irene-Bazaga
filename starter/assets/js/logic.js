// Select the start button element from the document.
const startButton = document.querySelector('#start');

// Select the timer display element from the document.
const timerDisplay = document.querySelector('#time');

// Initialize the timeValue to 75 seconds.
var timeValue = 75;

// Select the quiz start screen element from the document.
const StartQuizChallenge = document.querySelector('#start-screen');

// Create element for the question div
const Question = document.querySelector('#questions');

// Create element for the question title element
const QuestionTitle = document.querySelector('#question-title');

// Create element for the choice div
const Choice = document.querySelector('#choices');

// Add an event listener to the start button that triggers when clicked.
startButton.addEventListener('click', function (e) {
    // Update the text of timer display to show the timeValue in seconds.
    timerDisplay.textContent = timeValue + ' seconds';

    // Set up a recurring interval function that runs every 1000ms (1 second).
    var countdownInterval = setInterval(timePass, 1000);

    // Define the timePass function.
    function timePass() {
        // Decrease timeValue by one.
        --timeValue;

        // Update timer display with the new time value in seconds.
        timerDisplay.textContent = timeValue + ' seconds';

        // Check if timeValue has reached or goes below zero.
        if (timeValue <= 0) {
            // If yes, then clear the interval function, thus stopping the countdown.
            clearInterval(countdownInterval);

            // Update timer display to say 'Time is up!'
            timerDisplay.textContent = 'Time is up!';
        }
    }
});

// Add an event listener to the start button that triggers the StartQuiz function when clicked.
startButton.addEventListener('click', StartQuiz);