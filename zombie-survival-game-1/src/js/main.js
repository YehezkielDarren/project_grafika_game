// main.js - Entry point for the zombie survival game

// Set up the canvas and game context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
let gameRunning = false;
let lastTime = 0;

// Initialize the game
function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gameRunning = true;
    requestAnimationFrame(gameLoop);
}

// Game loop
function gameLoop(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    if (gameRunning) {
        update(deltaTime);
        render();
        requestAnimationFrame(gameLoop);
    }
}

// Update game state
function update(deltaTime) {
    // Update game logic here (e.g., player movement, zombie spawning)
}

// Render game elements
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Render game elements here (e.g., player, zombies, UI)
}

// Start the game
document.addEventListener('DOMContentLoaded', init);