// Connecting DOM
const rollBtn = document.getElementById("rollBtn");
const holdBtn = document.getElementById("holdBtn");
const resetBtn = document.getElementById("resetBtn");

const current1 = document.getElementById("current1");
const current2 = document.getElementById("current2");

const total1 = document.getElementById("total1");
const total2 = document.getElementById("total2");

const playerCards = document.querySelectorAll(".player-card");

// Declaring states for the game
let player1Score = 0;
let player2Score = 0;
let currentScore = 0;
let isPlayer1Turn = true;
let gameOver = false;

// Build Dice Roll
function rollDice() {
    if (gameOver) return;
    
    const dice = Math.floor(Math.random() * 6) + 1;
    console.log("Dice rolled: " + dice);

    if (dice === 1) {
        currentScore = 0;
        switchPlayers();
    } else {
        currentScore = currentScore + dice;
    }
    updateDisplay();
}

// Player holds
function hold() {
    if (gameOver) return;

    if (isPlayer1Turn) {
        player1Score += currentScore;
    } else {
        player2Score += currentScore;
    }

    // Check for winner
    if (player1Score >= 25 || player2Score >= 25) {
        gameOver = true;
        alert("Game Over! Player " + (player1Score >= 25 ? "1" : "2") + " wins!");
    } else {
        currentScore = 0;
        switchPlayers();
    }
}

// Switch players
function switchPlayers() {
    isPlayer1Turn = !isPlayer1Turn;
}

// Updating Display
function updateDisplay() {
    if (isPlayer1Turn) {
        current1.textContent = currentScore;
        current1.textContent = 0;
    } else {
        current2.textContent = 0;
        current1.textContent = currentScore;
    }

    total1.textContent = player1Score;
    total2.textContent = player2Score;
}


rollBtn.addEventListener("click", rollDice);
holdBtn.addEventListener("click", hold);

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    currentScore = 0;
    isPlayer1Turn = true;
    gameOver = false;

    current1.textContent = 0;
    current2.textContent = 0;
    total1.textContent = 0;
    total2.textContent = 0;
}