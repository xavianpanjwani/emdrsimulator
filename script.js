const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const ball = document.querySelector('.ball');
const colorInput = document.getElementById('color');
const speedInput = document.getElementById('speed');
const sizeInput = document.getElementById('size');
const speedValue = document.getElementById('speedValue');
const sizeValue = document.getElementById('sizeValue');

let isPaused = true;
let currentLeft = '0px';
let animationDuration = 2; // Default speed
let ballSize = 30; // Default size

// Apply initial styles
ball.style.animationDuration = `${animationDuration}s`;
ball.style.width = `${ballSize}px`;
ball.style.height = `${ballSize}px`;

// Start the ball
startBtn.addEventListener('click', () => {
    if (!isPaused) return;

    ball.style.animation = `move ${animationDuration}s infinite ease-in-out alternate`;
    ball.style.animationPlayState = 'running';
    ball.style.left = currentLeft; // Resume from last position
    isPaused = false;
});

// Pause the ball
pauseBtn.addEventListener('click', () => {
    if (isPaused) return;

    const computedStyle = getComputedStyle(ball);
    currentLeft = computedStyle.left;
    ball.style.animationPlayState = 'paused';
    isPaused = true;
});

// Reset the ball
resetBtn.addEventListener('click', () => {
    ball.style.animation = 'none';
    ball.style.left = '0px';
    ball.style.width = '30px';
    ball.style.height = '30px';
    ballSize = 30;
    animationDuration = 2;
    isPaused = true;
    speedInput.value = 75;
    sizeInput.value = 30;
    speedValue.textContent = '75%';
    sizeValue.textContent = '30px';
});

// Update ball speed dynamically
speedInput.addEventListener('input', (e) => {
    const speedPercent = e.target.value;
    speedValue.textContent = `${speedPercent}%`;
    animationDuration = 4 - speedPercent / 25; // Adjusts speed scaling

    if (!isPaused) ball.style.animationDuration = `${animationDuration}s`;
});

// Update ball size dynamically
sizeInput.addEventListener('input', (e) => {
    ballSize = e.target.value;
    sizeValue.textContent = `${ballSize}px`;
    ball.style.width = `${ballSize}px`;
    ball.style.height = `${ballSize}px`;
});

// Update ball color dynamically
colorInput.addEventListener('input', (e) => {
    const newColor = e.target.value;
    ball.style.backgroundColor = newColor;
});
