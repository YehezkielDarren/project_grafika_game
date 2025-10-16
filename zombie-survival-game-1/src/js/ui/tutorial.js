const tutorialText = [
    "Welcome to Zombie Survival Game!",
    "In this game, you are a survivor in a post-apocalyptic world filled with zombies.",
    "Your goal is to survive against waves of zombies and earn points by defeating them.",
    "You can choose from four weapons:",
    "1. Katana - Fast and deadly.",
    "2. Bare Hands - Basic melee attack.",
    "3. Wizard Book - Cast powerful spells.",
    "4. Dual Gun - Shoot zombies from a distance.",
    "Use the arrow keys or WASD to move your character.",
    "Press the attack button to engage zombies.",
    "Watch out for your health! If it reaches zero, it's game over.",
    "Good luck, and may you survive the apocalypse!"
];

function displayTutorial(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    tutorialText.forEach((line, index) => {
        ctx.fillText(line, canvas.width / 2, canvas.height / 2 + (index * 30) - (tutorialText.length * 15));
    });
}

export { displayTutorial };