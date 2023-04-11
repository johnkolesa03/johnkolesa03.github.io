// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }
    update() {
        if ((this.x + this.size) >= width) {
           this.velX = -(Math.abs(this.velX));
        }
  
        if ((this.x - this.size) <= 0) {
           this.velX = Math.abs(this.velX);
        }
  
        if ((this.y + this.size) >= height) {
           this.velY = -(Math.abs(this.velY));
        }
  
        if ((this.y - this.size) <= 0) {
           this.velY = Math.abs(this.velY);
        }
  
        this.x += this.velX;
        this.y += this.velY;
     }
    collisionDetect() {
        for (let j = 0; j < balls.length; j++) {
            if (!(this === balls[j])) {
                const dx = this.x - balls[j].x;
                const dy = this.y - balls[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
  
                if (distance < this.size + balls[j].size) {
                    balls[j].color = this.color = randomRGB();
              }
           }
        }
     }
}
const balls = [];


while (balls.length < 100) // # of balls 
{
    const size = random(1,50); // ball size
    const ball = new Ball(
        // ball position always drawn at least one ball width
        // away from the adge of the canvas, to avoid drawing errors
        random(0 + size,width - size),
        random(0 + size,height - size),
        random(-10,10), // random ball speed x
        random(-10,10), // random ball speed y
        randomRGB(),
        size
    );
    balls.push(ball);
}

function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0,0,width,height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();

/*const testball = new Ball(100, 100, 2,2, 'red', 10);
//const testball1 = new Ball(400, 238, 2,2, 'blue', 100);
//const testball2 = new Ball(700, 438, 2,2, 'aquamarine', 500);
testball.draw();

/*const i = 0;
while (i < 100) {
    testball.update();
    i += 1;
}

/*testball2.draw();
testball1.draw();*/