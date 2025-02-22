let dim;
//const IMG_URL = 'assets/logo.png';
//let imgBtn;

function preload(){
    
    font = loadFont('Assets/CaviarDreams.ttf');
   
  //imgBtn = createImg(IMG_URL, 'logo');
 
}

function setup() {
  createCanvas(1780, 840);
  dim = width / 2;
  background(0);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1);
  //imgBtn.position(500, 100).mousePressed(gotoGame);
    textFont(font);
        strokeWeight(1);
        noStroke();
        fill(255);
        textSize(100);
        text('M a n d R i t', 1000, 420, width);
        noStroke();
        fill(255);
        textSize(20);
        let s = 'O Mandrit é uma aplicação web para visualização e análise musical. Projeto em desenvolvimento da pesquisa de mestrado por Rute Maxsuelly, com orientação de Giordano Cabral. Complementada pela colaboração de membros do Grupo de pesquisa MUSTIC (CIn - UFPE), são eles: Horhanna Almeida, Felipe Calegário, Jader Abreu, Delando Jr. e Flaviano Dias.';
        //(s, x, y, caixa_texto_x, caixa_textoy)
        text(s, 1000, 450, 600,600);
  
}
  
function draw() {
  drawGradient(height / 2);
 
}

function drawGradient() {
  let radius = dim / 2;
  let h = random(0, 360);
    fill(h, 90, 90);
    ellipse(800,400, 20);
     ellipse(600,400, 30);
     ellipse(400,400, 40);
     ellipse(200,400, 50);
     ellipse(0,400, 100);
    h = (h + 1) % 360;
}

 
function gotoGame() {
  save('analisemusical.jpg');  
  
}
