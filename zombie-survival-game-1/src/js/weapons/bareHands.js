class BareHands extends Weapon {
    constructor() {
        super();
        this.name = "Bare Hands";
        this.damage = 5; // Base damage for bare hands
        this.attackSpeed = 1.0; // Attacks per second
        this.range = 1; // Effective range for melee attack
    }

    attack(target) {
        if (this.isInRange(target)) {
            target.takeDamage(this.damage);
            this.playAttackAnimation();
        }
    }

    isInRange(target) {
        // Simple distance check for melee range
        const distance = Math.sqrt(
            Math.pow(target.x - this.player.x, 2) + 
            Math.pow(target.y - this.player.y, 2)
        );
        return distance <= this.range;
    }

    playAttackAnimation() {
        // Logic for playing attack animation (if any)
    }
}

export default BareHands;