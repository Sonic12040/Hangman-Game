// Declare Variables Here
let hangmanWords = [`LINK`, `ZELDA`, `SAMUS`, `MARIO`, `PIKACHU`, `NESS`, `PIT`, `CLOUD`, `SONIC`, `LUIGI`, `YOSHI`, `SNAKE`, `LUCAS`, `BOWSER`, `GANONDORF`, `WARIO`, `PEACH` ];
let gameWins = 0;
let gameLosses = 0;
let blanksAndGuesses = [];
let guessCount = 7;
let lettersGuessed = [];

// Declare Functions here
function startGame() {
    guessCount = 7;
    lettersToGuess = [];
    lettersGuessed = [];
    blanksAndGuesses = [];
    let compWord = "str";
    document.getElementById(`lettersToGuess`).textContent = blanksAndGuesses;
    document.getElementById(`guessCount`).textContent = guessCount;
    document.getElementById(`wins`).textContent = gameWins;
    document.getElementById(`losses`).textContent = gameLosses;
    document.getElementById(`lettersGuessed`).textContent = lettersGuessed;
    blankGeneration();
}

function wordChoice() {
    compWord = hangmanWords[Math.floor(Math.random()*hangmanWords.length)];
    return compWord;
}

function blankGeneration() {
    lettersToGuess = wordChoice().split("");
    for (let i = 0; i < lettersToGuess.length; i++) {
        blanksAndGuesses.push("_ ");
    }
    document.getElementById(`lettersToGuess`).textContent = blanksAndGuesses.join(" ");
}

function guessCheck() {
    lettersGuessed.push(event.key.toUpperCase());
    document.getElementById(`lettersGuessed`).textContent = lettersGuessed.sort();
    for (let i = 0; i < blanksAndGuesses.length; i++) {
        if (event.key.toUpperCase() === compWord[i]) {
            blanksAndGuesses[i] = (event.key.toUpperCase());
            document.getElementById(`lettersToGuess`).textContent = blanksAndGuesses.join(``);
            winCheck();
        } 
    }
    if (blanksAndGuesses.indexOf(event.key.toUpperCase()) < 0) {
        guessCount--;
        document.getElementById(`guessCount`).textContent = guessCount;
        lossCheck();
    }

}

function letterGuessed() {
 if (lettersGuessed.indexOf(event.key.toUpperCase()) > -1) {
     alert(`You already guessed that letter!`);
 }
 else {
    guessCheck();
 }
}

function winCheck() {
    if (blanksAndGuesses.join(``) === compWord) {
        gameWins++;
        document.getElementById(`wins`).textContent = gameWins;
        alert(`You win!`);
    }
}

function lossCheck() {
    if (guessCount === 0) {
        gameLosses++;
        document.getElementById(`losses`).textContent = gameLosses;
        alert(`You lose!`);
    }
}

// Events here
startGame();

document.onkeypress = function(event) {
    letterGuessed();    
}
document.getElementById(`reset`).addEventListener(`click`, function() {
    startGame();
})