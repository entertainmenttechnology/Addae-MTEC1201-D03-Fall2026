/*
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 Exploring multiple patterns with the same loop structure

 This sketch uses one nested FOR loop over the
 same values, but creates different patterns depending 
 on how it uses those values to draw shapes.
 
 Clicking the mouse changes the pattern that's drawn.

 <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 */

// variable to set the amount values change between each loop
const spacing = 50;

// variable to track which pattern to draw
let pattern = 0;
 
 function setup() 
 {
   createCanvas(windowWidth, windowHeight);
 }
 
 function draw() 
 {
    background("white");
    noFill();
    strokeWeight(1);
 
   // for loop drawing squares
   for (let x = 0; x < width; x = x + spacing) 
   {
    for (let y = 0; y < height; y = y + spacing) 
    {
      // conditional switch depending on the value of pattern
    
      if(pattern === 0) {
        // first pattern: scaling squares

        // draw squares bigger as mouse moves down
        let size = mouseY/height * spacing;
        square(x, y, size);
        
      } 
      else if(pattern === 1) {
        // second pattern: lines

        // draw lines from mouseX and mouseY to 
        // each point (x, y)
        line(mouseX, mouseY, x, y);
      } 
      else if(pattern === 2) {
        // third pattern: scaling + moving circles
        let scale = height/mouseY * 2;
        let size = (height - y) * scale
        circle(x, mouseY, size);
      } 
  
    }
   }
 
 }

 // increment the pattern number when the mouse is pressed
 function mousePressed() {
  pattern += 1;
  if(pattern >= 3) {
    pattern = 0
  }
 }