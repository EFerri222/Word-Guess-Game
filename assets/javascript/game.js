//Global Variables
var win = false;
var reset = false;
var answersArray = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle" , "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran female", "nidorina", "nidoqueen", "nidoran male", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew"];

var answer = answersArray[Math.floor(Math.random() * answersArray.length)];
//Hold what the user has guessed
var guessesArray = [];
//holds an array of the characters of the answer
var answerCharArray = answer.split("");

var maskAnswer = function(str) {
    var res = [];
    for (i=0; i < str.length; i++) {
        res.push("_ ");
    }
    return res;
}

var guessedSoFar = maskAnswer(answer);

// var maskedAnswer = document.getElementById("answer-text");
// maskedAnswer.textContent = "test";
// document.getElementById("answer-text").innerHTML = "Test";

// Every time a user presses a key
document.onkeyup = function(event) {
    // Makes the result disappear once you press a key if the game is resetting
    // if (reset === true) {
        document.getElementById("resultBox").style.display = "none";
        document.getElementById("answerRevealed").style.display = "none";
        document.getElementById("whoImg").style.display = "none";
    // }
    // reset = false;
    console.log(answerCharArray);
    console.log(answersArray.length);

    // Determines which key was pressed.
    var userGuess = event.key;
    var guessesCorrect = 0;

    var guessesRemaining = document.getElementById("guesses-remaining-text");
    var repeat = false;
    var correctAnswer = false;

    if (guessesArray.length === 0) {
        for (i=0; i<answerCharArray.length; i++) {
            if (userGuess === answerCharArray[i]) {
                correctAnswer = true;
            }
        }
        if (correctAnswer === false) {
            guessesArray.push(userGuess);
        }
    } else {
        for (i=0; i<guessesArray.length; i++) {
            if (userGuess === guessesArray[i]) {
                repeat = true;
            }
        }

        for (i=0; i<answerCharArray.length; i++) {
            if (userGuess === answerCharArray[i]) {
                correctAnswer = true;
            }
        }

        if (repeat === false && correctAnswer === false) {
            guessesArray.push(userGuess);
        }
    }

    var guesses = document.getElementById("guesses-text");
    // Adds guess to the guesses-remaining-text paragraph element.
    guesses.textContent = guessesArray.join(" ");

    for (i=0; i<answerCharArray.length; i++) {
        if (userGuess === answerCharArray[i]) {
            guessedSoFar[i] = userGuess;
            document.getElementById("answer-text").innerHTML = guessedSoFar.join(" ");
        }
    }

    // Updates the guesses remaining count
    guessesRemaining.textContent = 6 - guessesArray.length;

    var result = document.getElementById("result-text");

    for (i=0; i<guessedSoFar.length; i++) {
        if (guessedSoFar[i] !== "_ ") {
            guessesCorrect++;

        }

        if (guessesCorrect === answerCharArray.length) {
            win = true; } else {
                win = false;
            }
    }

    guessesCorrect = 0;

    //You win
    if (win === true) {
        guessesRemaining.textContent = 6;
        guessesArray = [];
        guesses.textContent = "";
        document.getElementById("answerRevealed").textContent = "It's " + answer.toUpperCase() + "!";
        document.getElementById("answerRevealed").style.display = "block";
        function displayPicture(pokemon) {
            document.getElementById("whoImg").innerHTML = "<img src=\"assets/images/pokemon-sprites/" + pokemon + ".png\">";
        }
        displayPicture(answer);
        document.getElementById("whoImg").style.display = "block";
        result.textContent = "YOU WIN! :D Press any key to play again";
        document.getElementById("resultBox").style.display = "block";
        answer = answersArray[Math.floor(Math.random() * answersArray.length)];
        answerCharArray = answer.split("");
        guessedSoFar = maskAnswer(answer);
        document.getElementById("answer-text").textContent = maskAnswer(answer).join(" ");
        // reset = true;
    }

    win = false;

    // If you run out of guesses, you lose
    if (guessesRemaining.textContent === "0") {
        guessesRemaining.textContent = 6;
        guessesArray = [];
        guesses.textContent = "";
        document.getElementById("answerRevealed").textContent = "It's " + answer.toUpperCase() + "!";
        document.getElementById("answerRevealed").style.display = "block";
        function displayPicture(pokemon) {
            document.getElementById("whoImg").innerHTML = "<img src=\"assets/images/pokemon-sprites/" + pokemon + ".png\">";
        }
        displayPicture(answer);
        document.getElementById("whoImg").style.display = "block";
        // var result = document.getElementById("result-text");
        result.textContent = "You Lose! :( Press any key to play again";
        document.getElementById("resultBox").style.display = "block";
        answer = answersArray[Math.floor(Math.random() * answersArray.length)];
        answerCharArray = answer.split("");
        guessedSoFar = maskAnswer(answer);
        document.getElementById("answer-text").textContent = maskAnswer(answer).join(" ");
        // reset = true;
    }
  }