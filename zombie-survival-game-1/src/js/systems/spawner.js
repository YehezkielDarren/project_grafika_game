class Spawner {
    constructor(game) {
        this.game = game;
        this.zombieCount = 0;
        this.spawnRate = 2000; // milliseconds
        this.spawnTimer = 0;
    }

    update(deltaTime) {
        this.spawnTimer += deltaTime;
        if (this.spawnTimer >= this.spawnRate) {
            this.spawnZombie();
            this.spawnTimer = 0;
        }
    }

    spawnZombie() {
        const zombie = new Zombie(this.game);
        this.game.zombies.push(zombie);
        this.zombieCount++;
        this.adjustDifficulty();
    }

    adjustDifficulty() {
        if (this.zombieCount % 5 === 0) {
            this.spawnRate = Math.max(1000, this.spawnRate - 200); // Increase spawn rate
            this.game.increaseZombieStrength();
        }
    }
}

export default Spawner;