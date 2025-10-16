class Katana extends Weapon {
    constructor() {
        super();
        this.name = "Katana";
        this.damage = 50;
        this.attackSpeed = 1.5; // Attacks per second
        this.range = 1; // Melee range
    }

    attack(target) {
        if (this.isInRange(target)) {
            target.takeDamage(this.damage);
            this.createAttackEffect(target);
        }
    }

    isInRange(target) {
        // Implement logic to check if the target is within range
        // This could involve checking the distance between the player and the target
    }

    createAttackEffect(target) {
        // Implement visual effects for the katana attack
    }
}

export default Katana;