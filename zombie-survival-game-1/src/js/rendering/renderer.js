const renderer = {
    canvas: null,
    context: null,

    init: function(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
    },

    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    drawPlayer: function(player) {
        this.context.fillStyle = 'green';
        this.context.fillRect(player.x, player.y, player.width, player.height);
    },

    drawZombie: function(zombie) {
        this.context.fillStyle = 'red';
        this.context.fillRect(zombie.x, zombie.y, zombie.width, zombie.height);
    },

    drawHealth: function(health) {
        this.context.fillStyle = 'white';
        this.context.font = '20px Arial';
        this.context.fillText('Health: ' + health, 10, 20);
    },

    drawScore: function(score) {
        this.context.fillStyle = 'white';
        this.context.font = '20px Arial';
        this.context.fillText('Score: ' + score, 10, 50);
    },

    drawWave: function(wave) {
        this.context.fillStyle = 'white';
        this.context.font = '20px Arial';
        this.context.fillText('Wave: ' + wave, 10, 80);
    },

    render: function(player, zombies, health, score, wave) {
        this.clear();
        this.drawPlayer(player);
        zombies.forEach(zombie => this.drawZombie(zombie));
        this.drawHealth(health);
        this.drawScore(score);
        this.drawWave(wave);
    }
};

export default renderer;