let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0;
}

function draw() {
  // put drawing code here
  background(200);
  line(200,0,200,200)
   
  fill(200,150,60)
  ellipse(95,100,175,160)

  fill(300,210,10)
  ellipse(95,15,185,35)
  ellipse(60,70,17,17)
  ellipse(130,70,17,17)
  ellipse(95,110,30,17)
  arc(95,135,45,40,radians(0),radians(180))
  arc(95,135,42,5,radians(0),radians(180))

  fill(200,150,60)
  ellipse(300,100,175,160)

  
  fill(300,210,10)
  ellipse(300,15,185,35)
  ellipse(260,70,17,17)
  ellipse(330,70,17,17)
  var y = 110 + 20*Math.sin(PI*j/20)
  j += 2
  var r = 17 + 10*Math.sin(PI*j/20)
  ellipse(295,y,30,r)

  var y = 135 + 20*Math.sin(PI*j/20)
  j += 1
  arc(295,y,45,40,radians(0),radians(180))
  var y = 135 + 20*Math.sin(PI*j/20)
  j += 1
  arc(295,y,42,5,radians(0),radians(180))

  
}