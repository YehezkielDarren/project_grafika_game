class Zombie {
    constructor(x, y, health, speed) {
        this.x = x;
        this.y = y;
        this.health = health;
        this.speed = speed;
        this.alive = true;
    }

    moveTowards(playerX, playerY) {
        const dx = playerX - this.x;
        const dy = playerY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 0) {
            this.x += (dx / distance) * this.speed;
            this.y += (dy / distance) * this.speed;
        }
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.alive = false;
        }
    }

    update() {
        // Logic for updating zombie state can be added here
    }

    render(ctx) {
        if (this.alive) {
            ctx.fillStyle = 'green';
            ctx.fillRect(this.x, this.y, 20, 20); // Simple representation of a zombie
        }
    }
}

export default Zombie;