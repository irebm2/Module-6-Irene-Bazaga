// Select the start button element from the document.
const startButton = document.querySelector('#start');
// Select the secnds display element from the document.
const timerDisplay = document.querySelector('#time');
// Initialize the timeValue to 75 seconds.
let timeValue = 75;
// Create the element remaining seconds
let remainingSeconds = timeValue;
// Select the quiz start screen element from the document.
const startScreen = document.querySelector('#start-screen');
// Create element for the question div
const questionContainer = document.querySelector('#questions');
// Create element for the question title element
const questionTitle = document.querySelector('#question-title');
// Create element for the choice div
const choicesContainer = document.querySelector('#choices');
// Create element for the end-screen div
const endScreen = document.querySelector('#end-screen');
// Create a variable to store the question index
let questionIndex = 0;
// Create a variable to store the final score
const finalScore = document.querySelector('#final-score');

// Add an event listener to the start button that triggers when clicked.
startButton.addEventListener('click', startQuiz);

function startQuiz() {
  // Update the text of the timer display to show the timeValue in seconds.
  timerDisplay.textContent = timeValue + ' seconds';
  // Set up a recurring interval function that runs every 1000ms (1 second).
  const countdownInterval = setInterval(timePass, 1000);

  function timePass() {
    remainingSeconds--;
    // Update the timer display with the new time value in seconds.
    timerDisplay.textContent = remainingSeconds + ' seconds';

    // Check if remainingSeconds has reached or gone below zero.
    if (remainingSeconds <= 0) {
      // If yes, then clear the interval function, thus stopping the countdown.
      clearInterval(countdownInterval);
      // Update the timer display to say 'Time is up!'
      timerDisplay.textContent = 'Time is up!';
      finishQuiz();
    }
  }

  // Hide the start screen element.
  startScreen.style.display = 'none';
  // Show the questions element.
  questionContainer.style.display = 'block';
  // Display the current question
  displayQuestion(questionIndex);
}

function displayQuestion(index) {
  questionTitle.textContent = quizData[index].question;
  choicesContainer.innerHTML = '';

  // Create the answer buttons dynamically
  for (let i = 0; i < quizData[index].answers.length; i++) {
    const answer = document.createElement('button');
    answer.textContent = quizData[index].answers[i];
    choicesContainer.appendChild(answer);
    answer.addEventListener('click', function () {
      checkAnswer(answer);
    });
  }
}

function checkAnswer(selectedAnswer) {
  const answerText = selectedAnswer.textContent;
  const feedbackDiv = document.getElementById('feedback');
  feedbackDiv.style.display = 'block';
  const correctAnswer = quizData[questionIndex].correctAnswer;

  if (answerText === correctAnswer) {
    feedbackDiv.textContent = 'Right answer!';
  } else {
    feedbackDiv.textContent = 'Wrong answer!';
    remainingSeconds -= 10;
    if (remainingSeconds < 0) {
        remainingSeconds = 0;
    }
  }

  questionIndex++;
  if (questionIndex < quizData.length) {
    displayQuestion(questionIndex);
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
    clearInterval(countdownInterval); // Clear the interval to stop the timer
    
    questionContainer.style.display = 'none';
    endScreen.style.display = 'block';
    
    timerDisplay.textContent = remainingSeconds; // Display the score on the timer
    finalScore.textContent = remainingSeconds; // Update the final score element
    
    console.log('Quiz finished');
    console.log('Score: ' + remainingSeconds);
  }
  
function calculateScore(answerText) {
  const correctAnswersCount = quizData.filter(
    (question) => question.correctAnswer === answerText
  ).length;

  return correctAnswersCount * timeValue;
}