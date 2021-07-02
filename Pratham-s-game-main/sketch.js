var player1,player2;
var p11,p12,p13,p14,p21,p22,p23,p24,p25,p26,p27;
var logo,logoImg;
var win,winImg;
var score = 0;
var box;
var edges;

function preload(){
  bg1=loadImage("bg1.jpg");

  logoImg = loadImage("pic/logo.png");
  winImg = loadImage("pic/WIN.jpg");
  
  p11= loadImage("pic/p11.png");
  p12 = loadImage("pic/p12.png");
  p13 = loadImage("pic/p13.png");
  p14 = loadImage("pic/p14.png");
  // p14 = loadImage("f1-4.png")  
  
  p21= loadImage("pic/p21.png");
  p22 = loadImage("pic/p22.png");
  p23 = loadImage("pic/p23.png");
  p24 = loadImage("pic/p24.png");
  p25 = loadImage("pic/p25.png");
  p26 = loadImage("pic/p26.png");
  p27 = loadImage("pic/p27.png");
  
}


function setup() {
  createCanvas(1000,700);
  
 //edges =  createEdgeSprite();

  player1=createSprite(800,600,90,90) ;
  player1.addImage(p11);
  player1.scale = 0.5;
  
  player2=createSprite(90,600,90,90) ;
  player2.addImage(p21); 
  player2.scale = 1;

  logo = createSprite(500,200,70,70);
  logo.addImage(logoImg);
  
  win = createSprite(450,500,100,100);
  win.addImage(winImg);
  win.visible= false;
  
}

function draw() {
  background(bg1); 
  

if (score===300){
 win.visible = true;
}

box=createSprite(858,144,100,80);


// p1.bounceOff(edges);
// p2.bounceOff(edges);



if(keyDown("a")){
  player1.x-=6;
  player1.addImage(p11);
  
}





if(keyDown("d")){
  player1.x+=6;
  player1.addAnimation("hitting",p12);
}
 
  
if(keyDown("w")){
  player1.addImage(p12);
}
  
if(keyDown("s")){
  player1.addImage(p13);
}


if(keyDown("left")){
  player2.x-=6;
  player2.addImage(p21);
}

if(keyDown("right")){
  player2.x+=6;
  player2.addImage(p21);
}
  
if(keyDown("up")){
  player2.addImage(p22);
}

if(keyDown("down")){
  player2.addImage(p23);
}

if(player1.collide(player2)){
  score+=1;
}

drawSprites();
textSize(40);
fill("white");
textStyle(BOLD);
text("Score: "+score,800,50);

text(mouseX+','+mouseY,mouseX,mouseY);
  
}