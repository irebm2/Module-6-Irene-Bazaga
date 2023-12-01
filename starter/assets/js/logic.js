// Select the start button element from the document.
const startButton = document.querySelector('#start');

// Select the timer display element from the document.
const timerDisplay = document.querySelector('#time');

// Initialize the timeValue to 75 seconds.
var timeValue = 75;

// Select the quiz start screen element from the document.
const StartQuizChallenge = document.querySelector('#start-screen');

// Select the question
const Question = document.querySelector('#questions');

// Add an event listener to the start button that triggers when clicked.
startButton.addEventListener('click', function (e) {

    // Update the text of timer display element to show the timeValue in seconds.
    timerDisplay.textContent = timeValue + ' seconds';

    // Set up a recurring interval function that runs every 1000ms (1 second).
    var countdownInterval = setInterval(timePass, 1000);

    // Define the timePass function. 
    function timePass() {

        // Decrease timeValue by one.
        --timeValue;

        // Update timer display with the new time value in seconds.
        timerDisplay.textContent = timeValue + ' seconds';

        // Check if timeValue reaches or goes below zero.
        if (timeValue <= 0) {

            // If yes, then clear the interval function, thus stopping the countdown.
            clearInterval(countdownInterval);

            // Update timer display to say "Time is up!"
            timerDisplay.textContent = 'Time is up!';
        }
    }
});

// Add an event listener to the start button that triggers the StartQuiz function when clicked.
startButton.addEventListener('click', StartQuiz);

// Define the StartQuiz function.
function StartQuiz () {

    // Immediately hide the quiz start screen element.
    StartQuizChallenge.style.display = 'none';

    // Replace the class 'show' with 'hide' for StartQuizChallenge element.
    StartQuizChallenge.classList.replace('show','hide');
    // Replace the class 'hide' with 'show' for Question element.
    Question.classList.replace('hide','show');

    // Check if the classList of StartQuizChallenge contains 'hide'.
    if (StartQuizChallenge.classList.contains('hide')) {

        // If yes, then hide the StartQuizChallenge element.
        StartQuizChallenge.style.display = 'none';    
    }
    if (Question.classList.contains('hide')) {

        // If yes, then hide the StartQuizChallenge element.
        Question.style.display = 'none';    
    } else {Question.style.display = 'block';}
}
