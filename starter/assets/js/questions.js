// Define the StartQuiz function.
function StartQuiz() {
    // Immediately hide the quiz start screen element.
    StartQuizChallenge.style.display = 'none';

    // Show the questions element.
    Question.style.display = 'block';

    // Show question 1 in the start screen and Choices
    QuestionTitle.textContent = 'JavaScript File Has An Extension of:';

    // Create the answer1 button element.
    const answer1 = document.createElement('button');
    answer1.textContent = '.java';

    // Append the answer1 button to the Choice element.
    Choice.appendChild(answer1);

    // Repeat for the other choice elements
    const answer2 = document.createElement('button');
    answer2.textContent = '.java-script';
    Choice.appendChild(answer2);

    const answer3 = document.createElement('button');
    answer3.textContent = '.js';
    Choice.appendChild(answer3);

    const answer4 = document.createElement('button');
    answer4.textContent = '.xml';
    Choice.appendChild(answer4);

    // Add an EventListener to each answer element
    answer1.addEventListener('click', checkAnswer);
    answer2.addEventListener('click', checkAnswer);
    answer3.addEventListener('click', checkAnswer);
    answer4.addEventListener('click', checkAnswer);
}

function checkAnswer(event) {
    const answerText = event.target.textContent;

    const feedbackDiv = document.querySelector('#feedback');
    feedbackDiv.style.display = 'block';

    // In this case, the correct answer is '.js'.
    if (answerText === '.js') {
        feedbackDiv.textContent = 'Right answer!';
    } else {
        feedbackDiv.textContent = 'Wrong answer!';
        // if the answer is not correct then display -10 seconds in the timer
        timeValue -= 10;
    }

    // Remove the event listeners from the first set of answer buttons
    answer1.removeEventListener('click', checkAnswer);
    answer2.removeEventListener('click', checkAnswer);
    answer3.removeEventListener('click', checkAnswer);
    answer4.removeEventListener('click', checkAnswer);

    // Update the second question and answer options
    QuestionTitle.textContent = 'The Tag is used To Give Heading To The Table.';
    answer1.textContent = 'Caption';
    answer2.textContent = 'Head';
    answer3.textContent = 'Td';
    answer4.textContent = 'Th';

    // Add new event listeners to the second set of answer buttons
    answer1.addEventListener('click', checkAnswer_2);
    answer2.addEventListener('click', checkAnswer_2);
    answer3.addEventListener('click', checkAnswer_2);
    answer4.addEventListener('click', checkAnswer_2);
}

function checkAnswer_2(event) {
    const answerText = event.target.textContent;

    const feedbackDiv = document.querySelector('#feedback');
    feedbackDiv.style.display = 'block';

    // In this case, the correct answer is 'Caption'.
    if (answerText === 'Caption') {
        feedbackDiv.textContent = 'Right answer!';
    } else {
        feedbackDiv.textContent = 'Wrong answer!';
        // if the answer is not correct then display -10 seconds in the timer
        timeValue -= 10;
    }
}