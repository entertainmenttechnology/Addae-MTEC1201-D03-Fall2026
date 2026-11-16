/*
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
  Simplified code from the session 9 
  check-in worksheet.
  
  This version creates the same
  drawing with simplified logic and fewer
  lines of code.
  
  Draws a series of white squares framed
  in black that get smaller and smaller
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 */

const canvasSize = 19;
let rSize = canvasSize - 1;

function setup() {
	createCanvas(canvasSize, canvasSize);
	noStroke();
	background("white");
}

function draw() {
	let smallSize = rSize * 2/3;
	nestedRect(0, 0, rSize, smallSize);
	rSize = smallSize;
}

function nestedRect(x, y, long, short) {
	fill("black");
	rect(x, y, short, long);
	rect(x, y, long, short);

	fill("white");
	rect (x, y, short, short);
}