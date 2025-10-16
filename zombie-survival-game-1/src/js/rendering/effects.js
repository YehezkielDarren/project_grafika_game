function createEffect(ctx, x, y, type) {
    ctx.save();
    ctx.translate(x, y);

    if (type === 'splash') {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        setTimeout(() => ctx.clearRect(x - 20, y - 20, 40, 40), 200);
    } else if (type === 'spark') {
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        setTimeout(() => ctx.clearRect(x - 5, y - 5, 10, 10), 100);
    } else if (type === 'explosion') {
        ctx.fillStyle = 'orange';
        ctx.beginPath();
        ctx.arc(0, 0, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        setTimeout(() => ctx.clearRect(x - 30, y - 30, 60, 60), 300);
    }

    ctx.restore();
}

export { createEffect };