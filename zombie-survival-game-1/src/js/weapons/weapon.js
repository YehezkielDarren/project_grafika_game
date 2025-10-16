class Weapon {
    constructor(name, damage, attackSpeed) {
        this.name = name;
        this.damage = damage;
        this.attackSpeed = attackSpeed;
        this.lastAttackTime = 0;
    }

    attack(currentTime) {
        if (currentTime - this.lastAttackTime >= this.attackSpeed) {
            this.lastAttackTime = currentTime;
            return this.damage;
        }
        return 0;
    }

    getName() {
        return this.name;
    }
}

export default Weapon;