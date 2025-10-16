class WaveManager {
    constructor() {
        this.currentWave = 0;
        this.zombiesPerWave = 5;
        this.zombieHealthMultiplier = 1.2;
        this.pointsPerZombie = 10;
    }

    startNextWave() {
        this.currentWave++;
        const numberOfZombies = this.zombiesPerWave * this.currentWave;
        const zombieHealth = Math.floor(100 * Math.pow(this.zombieHealthMultiplier, this.currentWave - 1));
        const pointsForThisWave = this.pointsPerZombie * this.currentWave;

        this.spawnZombies(numberOfZombies, zombieHealth);
        return pointsForThisWave;
    }

    spawnZombies(numberOfZombies, health) {
        for (let i = 0; i < numberOfZombies; i++) {
            // Logic to spawn a zombie with the specified health
            // This would typically involve calling a spawner function
            console.log(`Spawning zombie with health: ${health}`);
        }
    }

    resetWaves() {
        this.currentWave = 0;
        this.zombiesPerWave = 5;
        this.zombieHealthMultiplier = 1.2;
        this.pointsPerZombie = 10;
    }
}

export default WaveManager;