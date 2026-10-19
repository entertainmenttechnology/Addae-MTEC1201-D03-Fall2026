/*
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
User-Defined Functions PT.I -- Modularity
 Creating user-defined functions to make Bouncing Ball Modular (separated into sub-tasks)
 Adapted from Coding Train 5.1: https://www.youtube.com/watch?v=wRHAitGzBrg
 ___________________________________
 FUNCTIONS HAVE THREE PARTS:
 * The word "function"
 * Function name
 * (Optional) parameters
 ___________________________________
 function functionName (parameters){
 statements;
 }
 <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 */

 let ballX = 0;
 let ballY = 300; 
 let speedX = 2; 
 let speedY = 3;

 function setup() {
    createCanvas(600, 600);
 }

 function draw () {
    background(150);

    move();
    bounce();
    display();
 }

 function move() {
    ballX += speedX;
    ballY += speedY;
 }

 function bounce() {
    if (ballX > width || ballX < 0) {
        speedX = speedX * -1;
    }

    if (ballY > height || ballY < 0) {
        speedY = speedY * -1;
    }
 }

 function display() {
    strokeWeight(5);
    fill(200, 10, 130);
    ellipse(ballX, ballY, 50, 50);
 }