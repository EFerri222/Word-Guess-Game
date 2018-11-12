var answersArray = ["bulbasaur", "charmander", "squirtle"];
var guessesArray = [];

// function(event) {
//     var answer = 
// }

document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    var guesses = document.getElementById("guesses-text");

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

    // Adds guess.
    guesses.textContent = guessesArray;
    console.log(guessesArray);
  }