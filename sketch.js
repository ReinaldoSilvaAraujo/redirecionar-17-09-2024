let cor;
let circuloX;
let circuloY;

//let posicaoHorizontal2;
//let posicaoVertical2;


function setup() {
  createCanvas(400, 500);// width x height
  background("red");
  cor = color(random(0,255),random(0,255),random(0,255));
  
  circuloX = [0,0,0];
  circuloY = [random(height),random(height),random(height)];
  //posicaoVertical = random(height);
  //posicaoHorizontal2 = 0;
  //posicaoVertical2 = random(height);
}

//circuloX=0,0,0
//circuloY=300,150,400
function draw() {
  console.log(circuloX.length);
  for(let contador in circuloX)
  {
    console.log (contador);
    circle(circuloX[contador],circuloY[contador],50);
    circuloX[contador]+= random(0,3);
  circuloY[contador]+= random(-3,3);
    
    if(circuloX[contador] >= width)
      {
      circuloX[contador]=0;
      circuloY[contador]=(random(height));
       }
    }
  rect(0,0,60,60);
  
  circle(circuloX[1],circuloY[1],50);
  circle(circuloX[2],circuloY[2],50);
  fill(cor);
  stroke("green")
  strokeWeight(5);
  
  
  
  //circuloX[1]+= random(0,3);
  //circuloY[1]+= random(-3,3);
  
  //circuloX[2]+= random(0,3);
  //circuloY[2]+= random(-3,3);
  
  if(mouseIsPressed)
    {
      cor= color(random(0,255),random(0,255),random(0,255), random(0,100));
      
      }
  //if(mouseIsPressed)
   // {
      //rect(mouseX,mouseY,10,10);
      //}
}