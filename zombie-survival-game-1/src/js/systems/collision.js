function checkCollision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
}

function handlePlayerZombieCollision(player, zombies) {
    zombies.forEach(zombie => {
        if (checkCollision(player.getBounds(), zombie.getBounds())) {
            player.takeDamage(zombie.damage);
        }
    });
}

function handleWeaponZombieCollision(weapon, zombies) {
    zombies.forEach(zombie => {
        if (checkCollision(weapon.getBounds(), zombie.getBounds())) {
            zombie.takeDamage(weapon.damage);
            if (zombie.isDead()) {
                // Handle zombie death (e.g., remove from array, increase score)
            }
        }
    });
}

function handleObstacleCollision(entity, obstacles) {
    obstacles.forEach(obstacle => {
        if (checkCollision(entity.getBounds(), obstacle.getBounds())) {
            // Handle collision response (e.g., stop movement, bounce back)
        }
    });
}

export { handlePlayerZombieCollision, handleWeaponZombieCollision, handleObstacleCollision };