document.getElementById('surpriseBtn').addEventListener('click', function () {
    document.getElementById('surpriseMessage').classList.toggle('hidden');
    startConfetti();
});

// 🎉 Simple Confetti Effect
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`,
            size: Math.random() * 8 + 2,
            speed: Math.random() * 3 + 1
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, index) => {
        ctx.fillStyle = c.color;
        ctx.fillRect(c.x, c.y, c.size, c.size);
        c.y += c.speed;
        if (c.y > canvas.height) confetti[index].y = 0;
    });
    requestAnimationFrame(drawConfetti);
}

function startConfetti() {
    createConfetti();
    drawConfetti();
}
