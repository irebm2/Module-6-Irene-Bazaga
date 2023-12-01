const startButton = document.querySelector('#start');
const timerDisplay = document.querySelector('#time');
var timeValue = 75;
const StartQuizChallenge = document.querySelector('#start-screen');

startButton.addEventListener('click', function (e) {
    timerDisplay.textContent = timeValue + ' seconds';
    
    var countdownInterval = setInterval(timePass, 1000);
    
    function timePass() {
        --timeValue;
        timerDisplay.textContent = timeValue + ' seconds';
        
        if (timeValue <= 0) {
            clearInterval(countdownInterval);  // stop the timer when it reaches zero
            timerDisplay.textContent = 'Time is up!';
        }
    }
});

startButton.addEventListener('click', StartQuiz);

function StartQuiz () {
    
    StartQuizChallenge.classList.replace('show','hide');
    if StartQuizChallenge.hasAttribute('hide') {
        StartQuizChallenge.style.display = 'none'
        
}}
