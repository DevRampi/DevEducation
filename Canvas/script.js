const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

const ballRadius = 10;
let x = canvas.width/2;
let y = canvas.height-10;
let dx = 1;
let dy = -1;

let balls = [];

canvas.addEventListener('click', onCanvasClick);

init();

function init() {
  generateBalls();
  setInterval(drawBalls, 10);
  
}

function Ball(x, y, radius, vx, vy, color) {
  this.x = x,
  this.y = y,
  this.radius = radius,
  this.vx = vx,
  this.vy = vy,
  this.color = color;
}

function onCanvasClick(event) {

}

function generateBalls() {
  for (let i = 1; i < 10; i++) {
    balls.push(
      new Ball(20*i, 25*i, 6*i, 1+i, 1-i, Math.floor(getRandomNumber(0, 255)))
    );
  }
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function drawBalls() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < balls.length; i++){  
      c.beginPath();
      c.arc(balls[i].x, balls[i].y, balls[i].radius, 0, Math.PI * 2, true);
      c.fillStyle = 'rgb(0, ' + Math.floor(155 - 42.5 + balls[i].color) + ', ' + 
      Math.floor(55 - 42.5 + balls[i].color) + ')';     
      c.fill();
      c.stroke();
  
      
      if (balls[i].x - balls[i].radius + balls[i].vx < 0 || balls[i].x + balls[i].radius + balls[i].vx > canvas.width) {
        balls[i].vx = -balls[i].vx;
      }
  
      if (balls[i].y + balls[i].radius + balls[i].vy > canvas.height || balls[i].y - balls[i].radius + balls[i].vy < 0) {
        balls[i].vy = -balls[i].vy;
      }
  
      balls[i].x += balls[i].vx
      balls[i].y += balls[i].vy
    }

    
  
  }
  

