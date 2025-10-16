// src/js/game.js

class Game {
    constructor() {
        this.isRunning = false;
        this.player = null;
        this.zombies = [];
        this.score = 0;
        this.wave = 0;
        this.maxZombies = 5;
        this.zombieHealthMultiplier = 1;
        this.canvas = document.getElementById('gameCanvas');
        this.context = this.canvas.getContext('2d');
    }

    start() {
        this.isRunning = true;
        this.wave = 0;
        this.score = 0;
        this.spawnWave();
        this.gameLoop();
    }

    stop() {
        this.isRunning = false;
        alert(`Game Over! Your score: ${this.score}`);
    }

    spawnWave() {
        this.wave++;
        this.maxZombies += 2;
        this.zombieHealthMultiplier += 0.5;
        for (let i = 0; i < this.maxZombies; i++) {
            this.zombies.push(new Zombie(this.zombieHealthMultiplier));
        }
    }

    gameLoop() {
        if (!this.isRunning) return;

        this.update();
        this.render();
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    update() {
        this.zombies.forEach(zombie => {
            zombie.moveTowards(this.player);
            if (this.checkCollision(this.player, zombie)) {
                this.player.takeDamage(zombie.damage);
                if (this.player.health <= 0) {
                    this.stop();
                }
            }
        });
    }

    render() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.render(this.context);
        this.zombies.forEach(zombie => zombie.render(this.context));
        this.renderHUD();
    }

    renderHUD() {
        this.context.fillStyle = 'white';
        this.context.font = '20px Arial';
        this.context.fillText(`Score: ${this.score}`, 10, 20);
        this.context.fillText(`Wave: ${this.wave}`, 10, 40);
        this.context.fillText(`Health: ${this.player.health}`, 10, 60);
    }

    checkCollision(entityA, entityB) {
        // Simple AABB collision detection
        return !(entityA.x > entityB.x + entityB.width ||
                 entityA.x + entityA.width < entityB.x ||
                 entityA.y > entityB.y + entityB.height ||
                 entityA.y + entityA.height < entityB.y);
    }
}

const game = new Game();
export default game;