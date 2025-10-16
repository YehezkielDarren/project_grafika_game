const HUD = {
    health: 100,
    score: 0,
    wave: 1,

    updateHealth(newHealth) {
        this.health = newHealth;
        this.render();
    },

    updateScore(points) {
        this.score += points;
        this.render();
    },

    updateWave(newWave) {
        this.wave = newWave;
        this.render();
    },

    render() {
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        // Clear the HUD area
        ctx.clearRect(0, 0, canvas.width, 50);

        // Draw health
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.fillText(`Health: ${this.health}`, 10, 30);

        // Draw score
        ctx.fillText(`Score: ${this.score}`, 200, 30);

        // Draw wave
        ctx.fillText(`Wave: ${this.wave}`, 400, 30);
    }
};

export default HUD;