var answersArray = ["bulbasaur", "charmander", "squirtle"];
var guessesArray = [];

// function(event) {
//     var answer = 
// }

document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    var guesses = document.getElementById("guesses-text");
    var guessesRemaining = document.getElementById("guesses-remaining-text");

    var repeat = false;

    if (guessesArray.length === 0) {
        guessesArray.push(userGuess);
    } else {
        for (i=0; i<guessesArray.length; i++) {
            if (userGuess === guessesArray[i]) {
                repeat = true;
            }
        }

        if (repeat === false) {
            guessesArray.push(userGuess);
        }
    }

    // Adds guess to the guesses-remaining-text paragraph element.
    guesses.textContent = guessesArray;

    // Updates the guesses remaining count
    guessesRemaining.textContent = 12 - guessesArray.length;

    // If you run out of guesses, you lose
    if (guessesRemaining.textContent === "0") {
        guessesRemaining.textContent = 12;
        guessesArray = [];
        guesses.textContent = "";
        var result = document.getElementById("result-text");
        result.textContent = "You Lose! :( Press any key to play again";
        document.getElementById("resultBox").style.display = "block";
    }

    // Makes the result disappear once you press a key and the guesses remaining goes to 11
    if (guessesRemaining.textContent === "11") {
        document.getElementById("resultBox").style.display = "none";
    }
  }