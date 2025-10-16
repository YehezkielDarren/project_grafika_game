class Camera {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.position = { x: 0, y: 0 };
        this.following = null;
    }

    follow(target) {
        this.following = target;
    }

    update() {
        if (this.following) {
            this.position.x = this.following.x - this.canvasWidth / 2;
            this.position.y = this.following.y - this.canvasHeight / 2;

            // Enforce camera boundaries
            this.position.x = Math.max(0, Math.min(this.position.x, this.getMaxX()));
            this.position.y = Math.max(0, Math.min(this.position.y, this.getMaxY()));
        }
    }

    getMaxX() {
        // Assuming the game world width is defined somewhere
        return GAME_WORLD_WIDTH - this.canvasWidth;
    }

    getMaxY() {
        // Assuming the game world height is defined somewhere
        return GAME_WORLD_HEIGHT - this.canvasHeight;
    }

    apply(ctx) {
        ctx.translate(-this.position.x, -this.position.y);
    }
}

export default Camera;