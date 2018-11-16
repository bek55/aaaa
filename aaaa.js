var aum;
var num = 0;

function setup() {
  createCanvas(250,200);
  background(255);
  noStroke();
  
  aum= loadImage("autumn.jpg");
  aum.loadPixels();
}

function draw() {
    noStroke();
  frameRate(60);
  var x = int(mouseX);
  var y = int(mouseY);
  
  var loc = aum.get(x,y);
  fill(loc,100);
  triangle(x,y,x+random(30),y-random(30),x+random(30),y+random(30));
}
function mousePressed() {
  if(num==0) {
    num=0;
    background(255);
  }
}
