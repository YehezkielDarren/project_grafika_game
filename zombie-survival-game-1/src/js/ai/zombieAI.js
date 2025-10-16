const ZombieAI = {
    update: function(zombie, player) {
        const distance = this.calculateDistance(zombie, player);
        
        if (distance < zombie.aggroRange) {
            this.moveTowards(zombie, player);
        }
    },

    calculateDistance: function(zombie, player) {
        const dx = player.x - zombie.x;
        const dy = player.y - zombie.y;
        return Math.sqrt(dx * dx + dy * dy);
    },

    moveTowards: function(zombie, player) {
        const angle = Math.atan2(player.y - zombie.y, player.x - zombie.x);
        zombie.x += Math.cos(angle) * zombie.speed;
        zombie.y += Math.sin(angle) * zombie.speed;
    }
};

export default ZombieAI;