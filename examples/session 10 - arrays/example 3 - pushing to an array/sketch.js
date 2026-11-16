// Creative Arrays + Loops Example
// draws a new circle where the user clicks on the screen with a random color

let xPositions = [];
let yPositions = [];
let colors = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20);

  for (let i = 0; i < xPositions.length; i++) {
    yPositions[i] -= 1;
    fill(colors[i]);
    circle(xPositions[i], yPositions[i], 20);
  }
}

function mousePressed() {
  xPositions.push(mouseX);
  yPositions.push(mouseY);
  colors.push(color(random(255), random(255), random(255)));
}