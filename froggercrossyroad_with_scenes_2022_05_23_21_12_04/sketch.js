var currentScene;
var x = 200
var y = 390
var obstaclex1 = 0
var obstaclex2 = 360
var obstaclex3 = 360
var obstaclex4 = 0
var obstaclex5 = 0
var obstaclex6 = 360
var lives;
var level;
var c;
var lifestore;
var drawMenu = function(){
  currentScene = "menu"
  level = 1
  lives = 3
  background(100,100,100)
  fill(0);
  textSize(20)
  noStroke()
  text("Ball and blocks",150,100)
  textSize(15)
  text("A frogger like game",150,150)
  fill(170,0,0)
  stroke(0)
  rect(175,185,50,30)
  fill(0)
  noStroke()
  text("Play",185,205)}
var drawGame= function(){ 
  currentScene = "game"
  background(220);
  stroke(0);
  fill(255, 0, 0);
  rect(obstaclex1, 190, 40, 20);
  obstaclex1 += 3+((level-1)/5)
  if (obstaclex1 > 360) {
    obstaclex1 = 0
  }
  fill(0, 255, 255);
  rect(obstaclex2, 290, 40, 20);
  obstaclex2 -= 1+((level-1)/5)
  if (obstaclex2 < 0) {
    obstaclex2 = 360
  }
  fill(0, 0, 255);
  rect(obstaclex3, 90, 40, 20);
  obstaclex3 -= 5+((level-1)/5)
  if (obstaclex3 < 0) {
    obstaclex3 = 360
  }
  if (level>=10){
  fill(255, 0, 0);
  rect(obstaclex4, 140, 40, 20);
  obstaclex4 += 4+((level-1)/5)
  if (obstaclex4 > 360) {
    obstaclex4 = 0
  }}
  if (level>=5){
  fill(0, 255, 255);
  rect(obstaclex5, 240, 40, 20);
  obstaclex5 +=2
  if (obstaclex5 > 360) {
    obstaclex5 = 0
  }}
  if (level>=15){
  fill(0, 0, 255);
  rect(obstaclex6, 90, 40, 20);
  obstaclex6 -= 6+((level-1)/5);
  if (obstaclex6 < 0) {
    obstaclex6 = 360;
  }}
  fill(0, 255, 0);
  ellipse(x, y, 20, 20);
  fill(0);
  textSize(15);
  noStroke()
  text("lives remaining:"+(lives),20,15);
  text("level:"+level,200,15)
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;

  }
  if (keyIsDown(UP_ARROW)) {
    y -= 5;

  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }
  if (x >= obstaclex1 && x <= obstaclex1 + 40 && y >= 190 && y <= 210) {
    y = 390;
    lives -= 1;
  }else if (x >= obstaclex1 - 10 && x <= obstaclex1 + 50 && y >= 180 && y <= 220) {
    stroke(255,0,0);
    strokeWeight(3);
    point(x,y);
    strokeWeight(1);
    noStroke();
  }
  if (x >= obstaclex2 && x <= obstaclex2 + 40 && y >= 290 && y <= 310) {
    y = 390;
    lives -= 1
  }else if (x >= obstaclex2-10 && x <= obstaclex2 + 50 && y >= 280 && y <= 320) {
    stroke(255,0,0);
    strokeWeight(3);
    point(x,y);
    strokeWeight(1);
    noStroke();
  }
  if (x >= obstaclex3 && x <= obstaclex3 + 40 && y >= 90 && y <= 110) {
    y = 390;
    lives -= 1
  }else if (x >= obstaclex3 - 10 && x <= obstaclex3 + 50 && y >= 80 && y<=120) {
    stroke(255,0,0);
    strokeWeight(3);
    point(x,y);
    strokeWeight(1);
    noStroke();
  }
  if (level >= 10 && x >= obstaclex4 && x <= obstaclex4 + 40 && y >= 140 && y <= 160) {
    y = 390;
    lives -= 1;
  }
  if (level >= 5 && x >= obstaclex5 && x <= obstaclex5 + 40 && y >= 240 && y <= 260) {
    y = 390;
    lives -= 1;
  }
  if (level >= 15 && x >= obstaclex6 && x <= obstaclex6 + 40 && y >= 90 && y <= 110) {
    y = 390;
    lives -= 1;
  }
  if (y<=10) {
    y = 390;
    level += 1;
  }
  if(x>400){
  x=0;
  }
  if(x<0){
  x=400;
  }
  if(level%5==0&&lives<lifestore){
    lifestore=lives;
    lives ++;
    lifestore --;
  }if(level%5!=0){
    
    lifestore=lives+1;
    
  }
  if (lives <= 0)
  {drawGameOver()}
};
var drawGameOver = function(){
  currentScene = "game over"
  background(150)
    fill(200,0,0)
    textSize(20)
    text("Game over",200,200)
    textSize(15)
    text("Score:"+level,200,220)
		fill(170,0,0)
  stroke(0)
  	rect(175,250,60,50)
  	fill(0)
  noStroke()
  	text("Return\nto menu",180,265)}
function setup() {
  createCanvas(400, 400);
  drawMenu()
}

mouseClicked  = function(){
	if(currentScene==="menu"&&mouseX>=175&&mouseY>=185&&mouseX<=225&&mouseY<=215){
  drawGame()
  }if(currentScene==="game over"&&mouseX>=175&&mouseY>=250&&mouseX<=235&&mouseY<=300){
  drawMenu()
  }
}
function draw() {
  if (currentScene === "game"){
  drawGame();  
  }
  fill(0);
  textSize(15);
  text("© Justin Banzon",285,385)
}