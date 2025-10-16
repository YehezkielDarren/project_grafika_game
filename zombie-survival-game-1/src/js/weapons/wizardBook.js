class WizardBook extends Weapon {
    constructor() {
        super();
        this.name = "Wizard Book";
        this.damage = 15;
        this.attackSpeed = 1.5; // Attacks per second
        this.burnDuration = 3; // Duration of burn effect in seconds
        this.burnDamage = 5; // Damage per second while burning
    }

    attack(target) {
        super.attack(target);
        this.applyBurnEffect(target);
    }

    applyBurnEffect(target) {
        target.takeDamage(this.burnDamage, this.burnDuration);
        // Logic to handle burn effect over time
    }
}

export default WizardBook;