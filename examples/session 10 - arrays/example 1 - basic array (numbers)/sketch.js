
let xPositions = [200, 300, 400, 500, 600, 700, 430, 150]; 
let yPositions = [10, 40, 70, 80, 200, 400, 430, 150]; 
let colors = ["blue", "purple", "green", "teal", "indigo", "orange", "grey"];

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill("white");

  for (let i = 0; i < xPositions.length; i++) {
    fill(colors[i]);
    circle(xPositions[i], yPositions[i], 50);
    yPositions[i] += 2;
    xPositions[i] += 2;
  }
  
  /*
  circle(xPositions[0], 200, 50);
  circle(xPositions[1], 200, 50);
  circle(xPositions[2], 200, 50);*/

  /*
  circle(xPositions[0], 400, 50);
  circle(xPositions[1], 400, 50);
  circle(xPositions[2], 400, 50);*/

 
  

}
