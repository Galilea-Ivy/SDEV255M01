// Your solution goes here
function playGuessingGame(numToGuess, totalGuess = 10) {
  let userGuess = prompt("Enter a number between 1 and 100.");
  let numOfGuesses = 0;

  while (numOfGuesses != totalGuess) {
    if (userGuess == null) {
      return 0;
    } else if (isNaN(userGuess) || userGuess == "") {
      userGuess = prompt("Please enter a number.");
    } else if (userGuess < numToGuess) {
      userGuess = prompt(userGuess + " is too small. Guess a larger number.");
      numOfGuesses++;
    } else if (userGuess > numToGuess) {
      userGuess = prompt(userGuess + " is too large. Guess a smaller number.");
      numOfGuesses++;
    } else if (userGuess == numToGuess) {
      return numOfGuesses + 1;
    } else {
      break;
    }
  }
  return 0;
}
