//I need an array that stores the list of words I want to be called for Hangman.
//I chose cat for a word, moon for repeated letters, and zulu for the same letters not next to each other.
var hangmanWords = ["A", "CAT", "MOON", "ZULU"];
//I need an array to store and display the letters guessed.
var lettersGuessed = [];
//I need a number to variable for wins and losses.
var gameWins = 0;
var gameLosses = 0;
var blanksAndGuesses = [];
//I need an initialization function.
function init() {
    var lettersGuessed = [];
}
//I need to choose a random word from the array to be the Hangman word.
function wordChoice() {
    return hangmanWords[Math.floor(Math.random()*hangmanWords.length)];
}
//I need blanks to be generated based on the number of letters in the word called for a game of Hangman.
    //This returns an array in which the word chosen is split into component parts.
function blankGeneration() {
    var lettersToGuess = wordChoice().split("");
    console.log(lettersToGuess);
    for (let i = 0; i < lettersToGuess.length; i++) {

        blanksAndGuesses.push("_ ");
        }
        document.getElementById("lettersToGuess").textContent = blanksAndGuesses.join(" ");    
}
console.log(blanksAndGuesses);
//I need a function that listens for the users keypress.
document.onkeypress = function(event) {

}
blankGeneration();
//The user guesses a letter.

//The letter is added to the list of guessed letters.

//If the letter is in the word, all instances of that letter are filled in.

//If the letter is not in the word, a part is added to the hangman.

//If the user guesses all of the letters, and the hangman is not complete, the user wins.

//If the hangman is complete, and the user has not gotten all the letters, the user loses.

//If neither has happened, the user may guess another letter.

//If the user selects to play a new game, everything is reset except the wins/losses counters, and a new game starts.

//If the user selects to quit, everything is reset.