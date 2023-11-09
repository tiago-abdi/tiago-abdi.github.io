const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const balls = [];

function generateBalls() {
  balls.length = 0; // Clear previous balls
  for (let i = 0; i < 25; i++) {
    const ball = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 30 + 10,
      color: getRandomColor(),
      speed: Math.random() * 3 + 1,
    };
    balls.push(ball);
  }

  animate();
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const ball of balls) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();

    ball.x += ball.speed;

    if (ball.x - ball.radius > canvas.width) {
      ball.x = -ball.radius;
    }
  }

  requestAnimationFrame(animate);
}
