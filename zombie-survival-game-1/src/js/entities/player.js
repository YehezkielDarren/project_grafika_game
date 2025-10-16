class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health = 100;
        this.speed = 5;
        this.score = 0;
        this.weapon = null;
    }

    move(direction) {
        switch (direction) {
            case 'up':
                this.y -= this.speed;
                break;
            case 'down':
                this.y += this.speed;
                break;
            case 'left':
                this.x -= this.speed;
                break;
            case 'right':
                this.x += this.speed;
                break;
        }
    }

    attack() {
        if (this.weapon) {
            return this.weapon.use();
        }
        return 0; // No weapon equipped
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    equipWeapon(weapon) {
        this.weapon = weapon;
    }

    gainScore(points) {
        this.score += points;
    }

    isAlive() {
        return this.health > 0;
    }
}

export default Player;