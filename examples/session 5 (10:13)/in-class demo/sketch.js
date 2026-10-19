let img; 
let myFont;
let x; 
let y; 

let fontX; 
let fontY; 
let ms; 
let seconds;

// runs before setup, to load our images & assets
function preload() {
  img = loadImage('images/stevie.jpg');

  //  replace filename with your font file
  //myFont = loadFont('nameofMyFont.otf'); 
}

function setup() {
  createCanvas(600, 600);
  x = 0; 
  y = 0; 
  fontX = 0;
  fontY = 0;
}

function draw() {
  background(220);
  imageMode(CENTER);
  ms = millis(); // the amount of ms since our sketch has started


  // image() draws the img with x, y coordinate, & width + height
  textSize(30);
  textFont("Impact");
  fill("red");

  if (ms / 1000 > 3) {
    text("Stevie Wonder", fontX, fontY);
  }

  image(img, 300, 300, 150, 150);
  fontX++; 
  fontY++;
  //x++;
  //y++; 


  /*

  // text() with extra commands for changing attributes
  textSize(20);
  textFont("Times New Roman");

  // textFont(myFont); if you use your own imported font
  textAlign(CENTER);
  fill(200, 50, 0);*/
  /*
  if (seconds > 3) {
    text("Stevie Wonder - A Legend", 300, 200);
  }*/
  //x++; // x = x + 1
  //y++; // y = y + 1
}


/*
  ms = millis();
  seconds = ms / 1000; 

  textSize(40);
  textAlign(CENTER);
  textFont("Courier New");
  fill(100, 0, 0, 100);

  // have text show after 3 seconds (ms / 1000)
  if (seconds > 3) {
      text("Stevie Wonder - A Legend", 500, 200);
  }*/
  

  // x++; 
 // y++; // y = y+1