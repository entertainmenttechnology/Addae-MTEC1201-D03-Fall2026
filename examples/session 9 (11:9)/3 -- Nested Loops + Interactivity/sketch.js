/*
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 Nested FOR loops with interactivity 

 A loop withing a loop lets us create a 2D grid
 out of individual squares. 
Check out this video by Dan Shiffman for more about nested loops: 
 https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/4-loops/2-nested 
 

 Q: How can we create interaction with a for loop?
 
 A: You can sneak a conditional statement into that for loop!
 
 In this example, each individual square in the grid 
 changes color with mouse hover
 <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 */

 // variable to set the size of the squares
 const size = 50;
 
 function setup() 
 {
   createCanvas(700, 700);
 }
 
 function draw() 
 {


   // The first for loop moves through changing
   // x values (left to right)
   for (let x = 0; x < width; x = x + size) 
   {
	// For each x value, we use a second for loop
	// moving through changing y values -- drawing
	// one column of squares
	for (let y = 0; y < height; y = y + size) 
	{
		// Check if the mouse is inside the square at x, y; 
		// set the fill color accordingly.
		if(mouseX > x && mouseX < x + size
		  && mouseY > y && mouseY < y + size 
		) {
			fill("red");
		} else {
			fill(200, 220, 255);
		}

		// draw a square at x, y
		rect(x, y, 50, 50);
	}
   }
 
 }