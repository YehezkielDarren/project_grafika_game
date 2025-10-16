const tileSize = 32; // Size of each tile in the tilemap
const tilemapWidth = 20; // Number of tiles in width
const tilemapHeight = 15; // Number of tiles in height

let tilemap = [];

// Function to initialize the tilemap with random tiles
function initializeTilemap() {
    for (let y = 0; y < tilemapHeight; y++) {
        tilemap[y] = [];
        for (let x = 0; x < tilemapWidth; x++) {
            tilemap[y][x] = Math.random() < 0.2 ? 1 : 0; // 20% chance of a wall tile
        }
    }
}

// Function to render the tilemap on the canvas
function renderTilemap(ctx) {
    for (let y = 0; y < tilemapHeight; y++) {
        for (let x = 0; x < tilemapWidth; x++) {
            if (tilemap[y][x] === 1) {
                ctx.fillStyle = 'gray'; // Wall tile color
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            } else {
                ctx.fillStyle = 'lightgreen'; // Ground tile color
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
        }
    }
}

// Function to get the tile at a specific position
function getTileAt(x, y) {
    if (x < 0 || x >= tilemapWidth || y < 0 || y >= tilemapHeight) {
        return null; // Out of bounds
    }
    return tilemap[y][x];
}

// Exporting functions for use in other modules
export { initializeTilemap, renderTilemap, getTileAt };