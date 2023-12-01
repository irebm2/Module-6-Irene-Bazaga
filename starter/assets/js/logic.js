// Select the start button element from the document.
const startButton = document.querySelector('#start');
// Select the timer display element from the document.
const timerDisplay = document.querySelector('#time');
// Initialize the timeValue to 75 seconds.
let timeValue = 75;
// Select the quiz start screen element from the document.
const StartQuizChallenge = document.querySelector('#start-screen');
// Create element for the question div
const Question = document.querySelector('#questions');
Question.style.display = 'none'; // Hide the questions initially
// Create element for the question title element
const QuestionTitle = document.querySelector('#question-title');
// Create element for the choice div
const Choice = document.querySelector('#choices');
// Create a variable to store the question index
let questionIndex = 0;

// Add an event listener to the start button that triggers when clicked.
startButton.addEventListener('click', function (e) {
  startQuiz();
});

function startQuiz() {
  // Update the text of timer display to show the timeValue in seconds.
  timerDisplay.textContent = timeValue + ' seconds';
  // Set up a recurring interval function that runs every 1000ms (1 second).
  const countdownInterval = setInterval(timePass, 1000);

  // Define the timePass function.
  function timePass() {
    // Decrease timeValue by one.
    timeValue--;
    // Update timer display with the new time value in seconds.
    timerDisplay.textContent = timeValue + ' seconds';
    // Check if timeValue has reached or goes below zero.
    if (timeValue <= 0) {
      // If yes, then clear the interval function, thus stopping the countdown.
      clearInterval(countdownInterval);
      // Update timer display to say 'Time is up!'
      timerDisplay.textContent = 'Time is up!';
      finishQuiz();
    }
  }

  // Hide the start screen element.
  StartQuizChallenge.style.display = 'none';
  // Show the questions element.
  Question.style.display = 'block';
  // Display the current question
  displayQuestion(questionIndex);
}

function displayQuestion(index) {
  QuestionTitle.textContent = quizData[index].question;
  const choices = document.getElementById('choices');
  choices.innerHTML = '';

  // Create the answer buttons dynamically
  for (let i = 0; i < quizData[index].answers.length; i++) {
    const answer = document.createElement('button');
    answer.textContent = quizData[index].answers[i];
    choices.appendChild(answer);
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
    timeValue -= 10;
  }

  questionIndex++;
  if (questionIndex < quizData.length) {
    displayQuestion(questionIndex);
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const score = calculateScore();
  // Add your own logic here to handle the end of the quiz, such as displaying the score or redirecting the user to another page.
  console.log('Quiz finished');
  console.log('Score: ' + score);
}

function calculateScore() {
  const correctAnswersCount = quizData.filter(
    (question) => question.correctAnswer === answerText
  ).length;

  return correctAnswersCount * timeValue;
}