/*
<><><><><><><><><><><><><><>
	"DRAWING WITH PMOUSE"
	
	introducing...
	- pmouseX, pmouseY
<><><><><><><><><><><><><><>
*/

function setup() 
{
	createCanvas(1000, 1000);
	background(127); //move this line to draw() and see what happens
}

function draw() 
{
	stroke(200, 100, 160);
	
	strokeWeight(40);
	
	line(mouseX, mouseY, pmouseX, pmouseY);
}