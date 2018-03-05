// Declare Variables Here
let hangmanWords = [`A`, `CAT`, `MOON`, `ZULU`];
let gameWins = 0;
let gameLosses = 0;
let blanksAndGuesses = [];


// Declare Functions here
function startGame() {
    let guessCount = 7;
    let lettersToGuess = [];
    let lettersGuessed = [];
    let compWord = "str";
    document.getElementById(`guessCount`).textContent = guessCount;
    document.getElementById(`wins`).textContent = gameWins;
    document.getElementById(`losses`).textContent = gameLosses;
    blankGeneration();
}

function playGame() {
    startGame();
}

function wordChoice() {
    compWord = hangmanWords[Math.floor(Math.random()*hangmanWords.length)];
    return compWord;
}

function blankGeneration() {
    let lettersToGuess = wordChoice().split("");
    for (let i = 0; i < lettersToGuess.length; i++) {
        blanksAndGuesses.push("_ ");
    }
    document.getElementById(`lettersToGuess`).textContent = blanksAndGuesses.join(" ");
}

function userGuess() {
    document.onkeypress = function(event) {
        guessCheck();    
    }
}

function guessCheck() {
    for (let i = 0; i < blanksAndGuesses.length; i++) {
        // blanksAndGuesses may be the wrong thing to match here.
        if (key.event.toUpperCase() = blanksAndGuesses[i]) {
            correctGuess();
            winCheck();
        } 

        else {
            letterGuessed();
        }
    }
}

function letterGuessed() {
 if (lettersGuessed.indexOf(key.event.toUpperCase()) > -1) {
     alert(`You already guessed that letter!`);
 }
 else {
     lettersGuessed.push(key.event.toUpperCase());
 }
}

function correctGuess() {
    blanksAndGuesses[i].push(key.event.toUpperCase());
}

function incorrectGuess() {
    guessCount--;
    document.getElementById(`guessCount`).textContent = guessCount;
}

function winCheck() {
    //This may need t be blanksAndGuesses.join?
    if (blanksAndGuesses == compWord) {
        updateWins();
        alert(`You win!`);
    }
}

function lossCheck() {
    if (guessCount === 0) {
        updateLosses();
        alert(`You lose!`);
    }
}

function updateWins() {
    gameWins++;
    document.getElementById(`wins`).textContent = gameWins;
}

function updateLosses() {
    gameLosses++;
    document.getElementById(`losses`).textContent = gameLosses;
}


// Events here
startGame();