class DualGun extends Weapon {
    constructor() {
        super();
        this.name = "Dual Gun";
        this.damage = 15;
        this.attackSpeed = 0.5; // Attacks per second
        this.range = 300; // Range of the weapon
        this.explosiveEffect = true; // Indicates if the weapon has explosive effects
    }

    attack(target) {
        if (this.isInRange(target)) {
            target.takeDamage(this.damage);
            this.createExplosionEffect(target.position);
            return this.damage;
        }
        return 0;
    }

    isInRange(target) {
        const distance = this.calculateDistance(this.position, target.position);
        return distance <= this.range;
    }

    createExplosionEffect(position) {
        // Logic to create an explosion effect at the given position
        console.log(`Explosion at ${position.x}, ${position.y}`);
    }

    calculateDistance(pos1, pos2) {
        return Math.sqrt(Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2));
    }
}

export default DualGun;