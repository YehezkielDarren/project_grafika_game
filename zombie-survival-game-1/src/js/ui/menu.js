const menu = {
    isActive: true,
    selectedWeapon: null,
    weapons: ['Katana', 'Bare Hands', 'Wizard Book', 'Dual Gun'],

    init: function() {
        this.render();
        this.addEventListeners();
    },

    render: function() {
        const menuContainer = document.createElement('div');
        menuContainer.id = 'menu';
        menuContainer.innerHTML = `
            <h1>Zombie Survival Game</h1>
            <button id="start-button">Start Game</button>
            <h2>Select Your Weapon</h2>
            <ul id="weapon-list">
                ${this.weapons.map(weapon => `<li>${weapon}</li>`).join('')}
            </ul>
        `;
        document.body.appendChild(menuContainer);
    },

    addEventListeners: function() {
        document.getElementById('start-button').addEventListener('click', this.startGame.bind(this));
        const weaponListItems = document.querySelectorAll('#weapon-list li');
        weaponListItems.forEach((item, index) => {
            item.addEventListener('click', () => this.selectWeapon(index));
        });
    },

    startGame: function() {
        this.isActive = false;
        document.getElementById('menu').remove();
        // Call the function to start the game
        // startGameFunction();
    },

    selectWeapon: function(index) {
        this.selectedWeapon = this.weapons[index];
        alert(`You have selected: ${this.selectedWeapon}`);
    }
};

menu.init();