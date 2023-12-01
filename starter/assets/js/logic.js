// Selecting elements from the HTML document
const startButton = document.querySelector('#start');
const timerDisplay = document.querySelector('#time');
const timerEl = document.querySelector('#timer');
let timeValue = 75;
let remainingSeconds = timeValue;
const startScreen = document.querySelector('#start-screen');
const questionContainer = document.querySelector('#questions');
const questionTitle = document.querySelector('#question-title');
const choicesContainer = document.querySelector('#choices');
const endScreen = document.querySelector('#end-screen');
const finalScore = document.querySelector('#final-score');
let questionIndex = 0;
let countdownInterval;
let submitButton = document.querySelector('#submit');

// Event listener for the start button
startButton.addEventListener('click', startQuiz);

function startQuiz() {
  // Setting up the quiz

  // Resetting the remaining time to its initial value
  remainingSeconds = timeValue;

  // Displaying the initial time value on the timer
  timerDisplay.textContent = timeValue + ' seconds';

  // Countdown interval that updates the timer every second
  countdownInterval = setInterval(timePass, 1000);

  // Function to update the countdown timer
  function timePass() {
    // Decreasing the remaining time by 1 second
    remainingSeconds--;

    // Displaying the updated time on the timer
    timerDisplay.textContent = remainingSeconds + ' seconds';

    // Checking if the time has run out
    if (remainingSeconds <= 0) {
      // Clearing the countdown interval
      clearInterval(countdownInterval);

      // Displaying "Time is up!" on the timer
      timerDisplay.textContent = 'Time is up!';
      finishQuiz();
    }
  }

  // Hiding the start screen and displaying the question container
  startScreen.style.display = 'none';
  questionContainer.style.display = 'block';

  // Displaying the first question
  displayQuestion(questionIndex);
}

function displayQuestion(index) {
  // Displaying the current question and its answer choices

  // Setting the question title
  questionTitle.textContent = quizData[index].question;

  // Clearing the previous answer choices
  choicesContainer.innerHTML = '';

  // Creating buttons for each answer choice
  for (let i = 0; i < quizData[index].answers.length; i++) {
    const answer = document.createElement('button');

    // Setting the text of each button to an answer choice
    answer.textContent = quizData[index].answers[i];

    // Appending the button to the choices container
    choicesContainer.appendChild(answer);

    // Adding an event listener to check the answer on button click
    answer.addEventListener('click', function () {
      checkAnswer(answer);
    });
  }
}

function checkAnswer(selectedAnswer) {
  // Checking if the selected answer is correct and providing feedback

  // Getting the text of the selected answer
  const answerText = selectedAnswer.textContent;

  // Getting the feedback div element
  const feedbackDiv = document.getElementById('feedback');

  // Displaying the feedback div
  feedbackDiv.style.display = 'block';

  // Getting the correct answer for the current question
  const correctAnswer = quizData[questionIndex].correctAnswer;

  if (answerText === correctAnswer) {
    // The answer is correct
    feedbackDiv.textContent = 'Right answer!';
  } else {
    // The answer is wrong
    feedbackDiv.textContent = 'Wrong answer!';

    // Decreasing the remaining time by 10 seconds
    remainingSeconds -= 10;

  }

  // Moving to the next question or finishing the quiz

  // Increasing the question index
  questionIndex++;

  // Checking if there are more questions remaining
  if (questionIndex < quizData.length) {
    // Displaying the next question
    displayQuestion(questionIndex);
  } else {
    // Finishing the quiz
    finishQuiz();
  }
}

function finishQuiz() {
  // Finishing the quiz and displaying the final score

  // Clearing the countdown interval
  clearInterval(countdownInterval);
  timerDisplay.textContent = remainingSeconds + ' seconds'
  // Hiding the question container
  questionContainer.style.display = 'none';

  // Displaying the final score (remaining seconds as score)
  finalScore.textContent = remainingSeconds;

  // Displaying the end screen
  endScreen.style.display = 'block';

  
  // Logging the quiz finish and score to the console
  console.log('Quiz finished');
  console.log('Score: ' + remainingSeconds);
}

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
  
    const initialsInput = document.querySelector('#initials');
    const initials = initialsInput.value.trim();
    const score = remainingSeconds;
  
    // Retrieve the existing quiz results from the local storage, or initialize an empty array
    const quizResults = JSON.parse(localStorage.getItem('quizResults')) || [];
  
    // Create a new quiz result object
    const quizResult = { initials: initials, score: score };
  
    // Append the new quiz result to the array
    quizResults.push(quizResult);
  
    // Store the updated quiz results back in the local storage
    localStorage.setItem('quizResults', JSON.stringify(quizResults));
  
    // Open the highscores page in the same window
    window.location.href = 'highscores.html';
  });