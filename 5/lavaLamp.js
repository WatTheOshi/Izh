document.addEventListener('DOMContentLoaded', () => {
    const lavaLamp = document.querySelector('.lava-lamp');
    let targetX = 50;
    let targetY = 50;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX / window.innerWidth * 100;
        targetY = e.clientY / window.innerHeight * 100;
    });

    function animate() {
        const currentX = parseFloat(lavaLamp.style.backgroundPositionX) || 50;
        const currentY = parseFloat(lavaLamp.style.backgroundPositionY) || 50;

        const newX = currentX + (targetX - currentX) * 0.1;
        const newY = currentY + (targetY - currentY) * 0.1;

        lavaLamp.style.background = `radial-gradient(circle at ${newX}% ${newY}%, rgba(255,0,0,0.5), rgba(255,255,0,0.5))`;

        requestAnimationFrame(animate);
    }

    animate();
});