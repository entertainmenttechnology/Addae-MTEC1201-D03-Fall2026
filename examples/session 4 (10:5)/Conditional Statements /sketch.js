/*
CONDITIONAL STATEMENTS -- First Example

if (condition) {
  execute these next lines of code if condition is TRUE
  ..
}

else if (condition_2) {
  execute these next lines is condition_2 is TRUE
  ..
}
else {
  execute if all other conditions are FALSE
  ..
}
*/
let x = 0;
let y = 300;

let speed = 3;

let r;
let g; 
let b;

function setup() {
  createCanvas(600, 600);
  r = 10;
  g = 50;
  b = 150;
}

function draw() {
  background(220);
  fill (r, g, b);
  

  // if x is hitting either edge, swap its direction
  // || = OR operator; && AND operator
  if (x > 600 || x < 0) {
    speed = - 1 * random(0.5, 5.5);
    
    if (speed > 10 || x < 0) {
      speed = 1;
    }

    // for debugging (right click sketch, click "Inspect", and click "Console Tab")
    print("X: " + x);
    print("speed: " + speed);
  }
  
  /* mouseIsPressed variable allows the behavior to continously run while mouse is held down
  if (mouseIsPressed) { 
    r = random(255);
    g = random(255);
    b = random(255);
  }*/
  
  x = x + speed;
  ellipse (x, y, 100);

  
  /*
  // if we're on the right side, draw purple
  if (mouseY > (height / 3) * 2) {
      fill(150, 0, 200);
  }
  else if (mouseY > height / 3) {
      fill (0, 150, 0);
  }
  else {
    // else, draw white
    fill(255);
  }*/
/*
 if (mouseX > width / 2) {
    fill(150, 0, 200);
 }
 else {
    // else, draw white
    fill(255);
  }*/

  
  /*
  if (mouseY > 400) {
    fill (150, 0, 200);
  }
  else if (mouseY > 200) {
    fill(0, 150, 10);
  }
  else {
    fill (255);
  }*/


}

// note: different from mouseIsPressed (boolean variable)
function mousePressed() {
  x = 0; 
}


// note: different from keyIsPressed (boolean variable)
function keyPressed() {
  if (key === 'r') {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
