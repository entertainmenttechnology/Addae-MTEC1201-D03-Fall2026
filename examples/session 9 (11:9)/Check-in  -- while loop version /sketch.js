/*
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
  Code from the session 9 check-in worksheet,
  modified to create the same drawing in
  one run of the draw() function
  using a while loop.
  
  
  Draws a series of white squares framed
  in black that get smaller and smaller
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 */

const canvasSize = 600;

function setup() {
	createCanvas(canvasSize, canvasSize);
	noStroke();
}

function draw() {
	background("white");

	// reset rSize at the beginning of draw
	let rSize = canvasSize - 1;
	let smallSize;

	/* This while loop will run a code block multiple
	 times as long as the condition (rSize > 1) 
	 is true at the start of the loop. 
	
	 It checks at the beginning of each run of
	 the loop to see if condition is still true;
	 if it is, it does another tun of the loop.
	 Otherwise, it exits the loop.
	*/
	while(rSize > 1) {
		smallSize = rSize * 2 / 3;
		nestedRect(0, 0, rSize, smallSize);
		rSize = smallSize;
	}

}

// draws one iteration of a white square nested
// in two rectangles
function nestedRect(x, y, long, short) {
	fill("black");
	rect(x, y, short, long);
	rect(x, y, long, short);

	fill("white");
	rect (x, y, short, short);
}
