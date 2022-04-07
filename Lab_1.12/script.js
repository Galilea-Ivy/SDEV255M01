// Your solution goes here 
function playGuessingGame(numToGuess, totalGuess =10) {
    let userGuess = prompt("Enter a number between 1 and 100.");

    for(i = 0; i < totalGuess.length; i++){
        if(userGuess < numToGuess){
            userGuess = prompt(userGuess + " is too small. Guess a larger number.");
        }
        else if(userGuess > numToGuess){
            userGuess = prompt(userGuess + " is too large. Guess a smaller number.");
        }
        else if(isNaN(userGuess)){
            userGuess = prompt("Please enter a number."); 
        }
        else if(userGuess == numToGuess){
            return i++;
        } 
        else {
            return 0;
        }
    }
}