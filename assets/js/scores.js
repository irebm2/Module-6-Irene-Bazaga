window.addEventListener('DOMContentLoaded', function() {
    const highscoresContainer = document.getElementById('highscores');
  
    // Retrieve the quiz results from the local storage
    const quizResults = JSON.parse(localStorage.getItem('quizResults'));
  
    if (quizResults && quizResults.length > 0) {
      // Sort the quiz results in descending order based on score
      quizResults.sort((a, b) => b.score - a.score);
  
      for (let i = 0; i < quizResults.length; i++) {
        const result = quizResults[i];
  
        // Create a list item element
        const listItem = document.createElement('li');
  
        // Set the text content of the list item to include the initials and score
        listItem.textContent = result.initials + ': ' + result.score;
  
        // Append the list item to the highscores container
        highscoresContainer.appendChild(listItem);
      }
    } else {
      // If there are no quiz results stored, display a message
      const noResultsMsg = document.createElement('li');
      noResultsMsg.textContent = 'No quiz results yet.';
      highscoresContainer.appendChild(noResultsMsg);
    }
  
    // Event listener for the clear button
    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', function() {
      // Clear the quiz results from the local storage
      localStorage.removeItem('quizResults');
  
      // Clear the highscores container
      highscoresContainer.innerHTML = '';
  
      // Display a message indicating that the highscores have been cleared
      const clearedMsg = document.createElement('li');
      clearedMsg.textContent = 'Highscores cleared.';
      highscoresContainer.appendChild(clearedMsg);
    });
  });