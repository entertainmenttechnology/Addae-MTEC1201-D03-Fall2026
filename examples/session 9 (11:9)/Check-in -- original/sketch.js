/*
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
  The original code from the session 9 
  check-in worksheet.
  
  Draws a series of white squares framed
  in black that get smaller and smaller
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 */

const canvasSize = 19;
let rSize = canvasSize - 1;
let flip = false;

function setup() {
	createCanvas(canvasSize, canvasSize);
	noStroke();
	background("white");
}

function draw() {
	let rWidth;
	let rHeight;

	if(flip) {
		rWidth = rSize;
		rHeight = applyRatio(rSize);
	} 
  	else {
		rHeight = rSize;
		rWidth = applyRatio(rSize);
	}

	nestedRect(0, 0, rWidth, rHeight);

	if(flip) {
		rSize = applyRatio(rSize);
	}
	flip = !flip;
}

function applyRatio(a) {
  return a * 2 / 3;
}

function nestedRect(x, y, w, h) {
	fill("black");
	rect(x, y, w, h);

	fill("white");
	if(w < h) {
		rect (x, y, w, w);
	} else {
		rect (x, y, h, h);
	}
}