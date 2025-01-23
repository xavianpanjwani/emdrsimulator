const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const ball = document.querySelector('.ball');
const colorInput = document.getElementById('color');

let isPaused = true; // Tracks ball state
let currentLeft = '0px'; // Tracks ball's last position

// Start the ball
startBtn.addEventListener('click', () => {
    if (!isPaused) return;

    ball.style.animation = `move 2s infinite ease-in-out alternate`;
    ball.style.animationPlayState = 'running';
    ball.style.left = currentLeft; // Resume from last position
    isPaused = false;
});

// Pause the ball
pauseBtn.addEventListener('click', () => {
    if (isPaused) return;

    const computedStyle = getComputedStyle(ball);
    currentLeft = computedStyle.left; // Save current position
    ball.style.animationPlayState = 'paused';
    isPaused = true;
});

// Reset the ball
resetBtn.addEventListener('click', () => {
    ball.style.animation = 'none';
    ball.style.left = '0px'; // Reset position
    isPaused = true;
});

// Update ball color dynamically
colorInput.addEventListener('input', (e) => {
    const newColor = e.target.value;
    ball.style.backgroundColor = newColor;
});
