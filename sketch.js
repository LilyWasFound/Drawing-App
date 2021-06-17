var pen, penImage
var blackInk1, blackInk1Image
var blackInk2, blackInk2Image

function preload() {
  penImage = loadImage("pen.png");
  blackInk1Image = loadImage("ink.png");
  blackInk2Image = loadImage("ink.png");
}

function setup() {
  createCanvas(1535,720);
  
  pen = createSprite(550,100,10,10);
  pen.addImage(penImage); 
  pen.scale = 0.25
  
  edges = createEdgeSprites();
}

function draw() {
  background("white");
  
  pen.y = mouseY;
  pen.x = mouseX;
  drawSprites();
  
  if (keyDown("1")) {
  var temp_blackInk1 = createblackInk1();
  temp_blackInk1.addImage(blackInk1Image);
  temp_blackInk1.y = pen.y;
  temp_blackInk1.x = pen.x;
  }
  if (keyDown("2")) {
  var temp_blackInk2 = createblackInk2();
  temp_blackInk2.addImage(blackInk2Image);
  temp_blackInk2.y = pen.y;
  temp_blackInk2.x = pen.x;
}
}

  function createblackInk1() {
  blackInk1 = createSprite(360,10,5,10);
  blackInk1.scale = 0.1;
  return blackInk1;
  }
  
  function createblackInk2() {
  blackInk2 = createSprite(360,10,5,10);
  blackInk2.scale = 0.2;
  return blackInk2;
  }
