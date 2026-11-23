
let balls = [];
let ballAmt = 1000; 

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < ballAmt; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(10, 100);
    let color = [random(255), random(255), random(255), 50];
    balls.push(new Ball(x, y, size, color));
  }
  /*
  ball = new Ball(100, 200, 20, "blue");
  ball2 = new Ball(300, 300, 50, "red");*/

  //print(ball);
  //print(ball.x, ball.y, ball.size);
}

function draw() {
  background(40);
  for (let i = 0; i < ballAmt; i++) {
    balls[i].show();
    balls[i].move();
  }
  /*
  fill("blue");
  ellipse(ball.x, ball.y, ball.size);
  ellipse(ball2.x, ball2.y, ball2.size);
  ball.x += random(-5, 5);*/
}

class Ball {
    // SIMILAR TO "SETUP" FUNCTION, initializing values/attributes
    constructor(tempX, tempY, tempSize, tempColor) {
      this.x = tempX;
      this.y = tempY; 
      this.size = tempSize;
      this.color = tempColor;
    }

    // NOTE: not including the word "function"
    show() {
      fill(this.color);
      noStroke();
      ellipse(this.x, this.y, this.size);
    }

    move() {
      this.x += random(-5, 5);
      this.y += random(-5, 5);
    }

}