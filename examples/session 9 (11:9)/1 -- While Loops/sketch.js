/*
<><><><><><><><><><><><><><><><><><><><>
 WHILE LOOPS
 ________________
 Reference: 
 https://p5js.org/reference/p5/while/
 <><><><><><><><><><><><><><><><><><><><>
 */

 function setup() 
 {
   createCanvas(700, 700);
   rectMode(CENTER);
 }
 
 function draw() 
 {
   background("gold");
   noFill();
   strokeWeight(5);
   
   //while loop drawing rectangles from the middle
   //to the edge of the screen
   let size = 40;
   while (size < width) 
   { //code in braces runs if boolean is true
     square(width/2, height/2, size);
     size = size + 100;
   }
 
   // while loop drawing circles diagonally
   // across the canvas
   let x = 25;
   fill("blue");
   while (x < width) 
   {
     circle(x, x, 30);
     x = x + 50;
   }
 }