//MANDRIT -  Quantidade de notas em função do tempo cíclico
//BUBBLE CHART// COMPASSO 5/4

let airData;
let raioFundo = 380;
let raioFundoComposto = 380;
let tempo;
let divisaoCirculo = 50; //40 //60
let raioMenor = 100;
let raioMaior = 300;
let tamanhoMenor = 1;//1//1//0.5
let tamanhoMaior = 3;//5//3//5
let cores = [];
let faixas = [];
let tempomin;
let tempomax;
let faixamin;
let faixamax;
let tamanho;
let tamanhomin;
let tamanhomax;
let indiceCor = 0;

//CURSOR
let cx, cy;
let raioSegundos;
let x = 0.0; // Current x-coordinate
let y = 0.0; // Current y-coordinate
let batida = 0.05; // Size of each batida along the path
let caminhoBatida = 0.0; // Percentage traveled (0.0 to 1.0)
var xCursor = 60 ;

let button;
var ellipseWidth = 10;
let time = 0


function preload(){
  airData = loadTable("Plotar_Musicas5por4/Takefive5por4_64.csv",
    "csv",
    "header");
    
     sound = loadSound('ArquivoMusicas5por4/taketakeOK.mp3');
    
  
    font = loadFont('assets/CaviarDreams.ttf');
}

function setup() {
  createCanvas(1780, 840);
  center = createVector(width/2, height/2);
  maxRadius = min(center.x, center.y) * 0.9;
  noStroke();

  background(255); 
  ellipseMode(CENTER);
  textFont(font);                
       
 
    //Função SaveAnalise - inclui botão de play em musica para facilitar análise e seu download da visualização. 
  SaveAnalise();
  tocarMusica();
     rotate(PI/-2);
        
 ///RANGE DE CORES///
 //Faixa 1//Condução
amarelo = color(254,250,104);
cores.push(amarelo);
amarelo.setAlpha(128 + 128 * sin(millis() / 5000));
//Faixa 2//condução 
  vermelho = color(140,23,23);
 cores.push(vermelho);
vermelho.setAlpha(128 + 128 * sin(millis() / 5000));
 //Faixa 3//Graves
 azul = color(0,0,255);
 cores.push(azul);
 azul.setAlpha(128 + 128 * sin(millis() / 5000));
  //Faixa 4//agudos
 verde = color(0, 255, 90);
 cores.push(verde);
 verde.setAlpha(128 + 128 * sin(millis() / 5000));
  //Faixa 5//floreios
 laranja = color(255,133,0,100);
 cores.push(laranja);
 laranja.setAlpha(128 + 128 * sin(millis() / 5000));
  //Faixa 6//
  marron = color(184,115,51);
 cores.push(marron);
 marron.setAlpha(128 + 128 * sin(millis() / 5000));
  //Faixa 7//
 magenta = color(239,98,166);
 cores.push(magenta);
 magenta.setAlpha(128 + 128 * sin(millis() / 5000));
  //Faixa 8//
 roxo = color(117,92,160);
 cores.push(roxo);
 roxo.setAlpha(128 + 128 * sin(millis() / 5000));
  //Faixa 9//
 rosa = color(255,192,203);
 cores.push(rosa);
 rosa.setAlpha(128 + 128 * sin(millis() / 5000));
  //Faixa 10//
violetaPastel = color(221,170,255);
 cores.push(violetaPastel);
 violetaPastel.setAlpha(128 + 128 * sin(millis() / 5000));
  //Faixa 11//
 azulClaro = color(50,173,240);
 cores.push(azulClaro);
 azulClaro.setAlpha(128 + 128 * sin(millis() / 5000));
  //Faixa 12//
 pastelAlaranjado= color(233,108,102);
 cores.push(pastelAlaranjado);
 pastelAlaranjado.setAlpha(128 + 128 * sin(millis() / 5000));
  //Faixa 13//
 cinza= color(199, 200, 203);
 cores.push(cinza);
 cinza.setAlpha(128 + 128 * sin(millis() / 5000));
 //Faixa 14//
verdeEscuro= color(51, 163, 105);
 cores.push(verdeEscuro);
 verdeEscuro.setAlpha(128 + 128 * sin(millis() / 5000));
  //Faixa 15//
 laranjaPastel= color(246, 185, 78);
 cores.push(laranjaPastel);
 laranjaPastel.setAlpha(128 + 128 * sin(millis() / 5000));
  //Faixa 16//
 verdeClaro= color(200, 221, 90);
 cores.push(verdeClaro);
 verdeClaro.setAlpha(128 + 128 * sin(millis() / 5000)); 
 
 tempo = airData.getColumn("Y");
 tempomin = min(tempo);
 tempomax = max(tempo);
 faixa = airData.getColumn("X");
 faixamin = min(faixa);
 faixamax = max(faixa);
 tamanho = airData.getColumn("Total_de_notas");
 tamanhomin = min(tamanho);
 tamanhomax = max(tamanho);
 
 

}

function draw() {
       cursorAnimado();
        strokeWeight(1);
        stroke(0);
        textSize(50);
        text('M A N D R I T', 1200, 800, width);
            
        //Legenda Track//
        stroke(0);
        noFill();
        rect(10, 375, 420, 100);
        rect(1350, 50,500, 630);
        rect(1350, 620,500, 60);
        line(1350, 450,1770,450);
        //horizontais//
        line(1435, 520, 1465,520);
        line(1490, 520,1530,520);
        line(1555, 520,1625,520);
        line(1645, 520,1740,520);
        
        //verticais//
                line(1740, 500, 1740, 540);
                line(1645, 500, 1645, 540);
                line(1625, 500, 1625, 540);
                line(1555, 500, 1555, 540);
                line(1530, 500, 1530, 540);
                line(1490, 500, 1490, 540);
                line(1465, 500, 1465, 540);
                line(1435, 500, 1435, 540);
                
                textSize(20);
                text('Quantidade de notas', 1450, 480, width);
                //alterada de acordo com a musica plotada
                text('Fórmula do Compasso: 4/4', 1430, 660, width); //5/4 ou 2/4 ou 3/4...
                textSize(30);
                text('-', 1400, 580, width);
               text('+', 1750, 580, width);
                
                
 translate(width / 2, height / 2);
   textos();
  drawCirclefundo();
   drawCirclefundoComposto();
 rotate(PI/-2);
  noStroke();
  drawDados(); 
}


//Dados musicais extraídos do MIDI//
function drawDados(){
    indiceCor = 0;

  for(let i = 0; i< airData.getRowCount(); i++){
    let tempoAtual = airData.getNum(i,"Y");
    let posicao = map(tempoAtual, tempomin, tempomax, 0, divisaoCirculo-1);
    let faixaAtual = airData.getNum(i,"X");
    let faixaAtualLegenda = airData.getNum(i,"X");
    let indice = criarOuAtualizarFaixa(faixaAtual);
    let faixa = faixas[indice];
    let raio = map(faixaAtual, faixamin, faixamax, raioMaior, raioMenor);
    let tamanhoAtual = airData.getNum(i,"Total_de_notas");
    let tamanho = map(tamanhoAtual, tamanhomax, tamanhomin, tamanhoMaior, tamanhoMenor);
    
    fill(faixa.cor);
               

    drawCircles(divisaoCirculo,raio, posicao, tamanho);
    
         drawRectLegenda(faixa);
  }
}

function criarOuAtualizarFaixa(faixaAtual){
  for(i = 0; i< faixas.length;i++){
    if(faixas[i] && faixas[i].numero == faixaAtual){
      faixas[i].quantidade++;
      console.log(faixas[i]);
      console.log(i);
      return i;
    }
  }
  indiceCor++;
  if(indiceCor >= cores.length){
    indiceCor = 0;
  }
  faixas.push(new Faixa(faixaAtual, cores[indiceCor]));
  return faixas.length-1;
  
}
////////CIRCLES SEQUÊNCIA ÂNGULAR (EM FUNÇÃO DO CICLO TEMPORAL POLAR)/////////
function drawCircle(angle, i, radius,circleRadius){
  xCircle = cos(angle*i) * radius;
  yCircle = sin(angle*i) * radius;

        ellipse(xCircle, yCircle, circleRadius*2, circleRadius*2);
}

////////CIRCLES EM FUNÇÃO DA QUANTIDADE/////////
function drawCircles(circles, radius, i, tamanho){
    angle = Math.PI*2 / circles;
    circleRadius = sin(angle/2) * radius *tamanho;
    ellipseMode(CENTER);
    
    //Reitera o draw também em função do tempo//
    drawCircle(angle, i, radius,circleRadius);
}

 //Maracação do compasso fixo ao fundo div = 16/32/64/128 tempos rítmicos
function drawCirclefundo(){
  
  //Opção Nogrid:
        //stroke(0);
    //fill(0);
    //circle(0,0,340);
  
  
    ellipseMode(CENTER);
    stroke(146);
    noFill();
    //strokeWeight();
    
    circles = 5; ////16 para músicas 2/4; 32 para 3/4;  64 para 4/4; //TakeaFive 5/4(4/4 + 1/4de64) = 80 times 
    angleFundo = Math.PI*2 / circles;
    //rotate(2*PI); //para começar no ponteiro 

    circleRaiofundo = sin(angleFundo/16);
    
    for(var i = 0; i < circles; i++){
        xCircle = -sin(angleFundo*i) * raioFundo;
        yCircle = -cos(angleFundo*i) * raioFundo;
        ellipseMode(CENTER);
        strokeWeight(10);
        point(xCircle, yCircle, circleRaiofundo, circleRaiofundo); //+5, +10
        
        strokeWeight(0.5);
        circle(0,0, 380);
               //circle(xCircle,yCircle , 380);
        line(xCircle,yCircle , circleRaiofundo, circleRaiofundo)+10; 
        
    }
        textSize(20);
        stroke(0);
        text('1',-5, -390, width);
        text('2',380, -110, width);
        text('3',220, 340, width);
        text('4',-240, 340, width);        
         text('5',-390, -110, width);        
} 
 //Maracação fixa ao fundo para compassos compostos Ex: 12/8 9/8 
function drawCirclefundoComposto(){
  
    ellipseMode(CENTER);
    stroke(146);
    noFill();
    circles = 20; //20 para 5/4 
    angleFundo = Math.PI*2 / circles;

    circleRaiofundo = sin(angleFundo/96) * raioFundoComposto;
    for(var i = 0; i < circles; i++){
     
        xCircle = cos(angleFundo*i) * raioFundoComposto;
        yCircle = sin(angleFundo*i) * raioFundoComposto;
        ellipseMode(CENTER);
        //stroke(0);
        strokeWeight(5);
        point(xCircle, yCircle, circleRaiofundo, circleRaiofundo); //+5, +10
        strokeWeight(2);
         ellipse(xCircle, yCircle, circleRaiofundo+10, circleRaiofundo+10); //+5, +10  
    }
}


//TENTATIVA DE CRIAR LEGENDA AUTOMÁTICA//
function drawLegenda(faixa){ 
noStroke();

  for(i = 0; i< faixas.length;i++){
    if(faixas[i] && faixas[i].cor == faixaAtualLegenda){
      faixas[i].cor++;
      console.log(faixas[i]);
      console.log(i);
      return i;
    }
    indiceCor++;
  if(indiceCor >= cores.length){
    indiceCor = 0;
    }
  }
  faixas.push(new Faixa(faixaAtualLegenda, cores[indiceCor]));
  return faixas.length-1;
  
  drawRectLegenda(faixaLegenda);
}
  
 
  function drawRectLegenda(faixaLegenda){
  
         //fill(faixa.cor)
         //fill( amarelo);
         //circle(300, 560, 20, 60);
         //rect(300, 560, 20, 60);
         fill(vermelho);         
         circle(280, 560, 20, 60);
         rect(280, 560, 20, 60);
         fill(azul);
         circle(260, 560, 20, 60);
         rect(260, 560, 20, 60);
          fill(verde);
         circle(240, 560, 20, 60);
         rect(240, 560, 20, 60);
         
        
         fill(laranja);
         circle(220, 560, 20, 60);
         rect(220, 560, 20, 60);
          fill(marron);         
         circle(200, 560, 20, 60);
         rect(200, 560, 20, 60);
     
         
         /*fill(magenta);
         circle(180, 560, 20, 60);
         rect(180, 560, 20, 60);
         
         fill(roxo);
         circle(160, 560, 20, 60);
         rect(160, 560, 20, 60);
       
         
         fill(rosa);         
         circle(140, 560, 20, 60);
         rect(140, 560, 20, 60);
         
         fill(violetaPastel);
         circle(120, 560, 20, 60);
         rect(120, 560, 20, 60);
         fill(azulClaro);
         circle(100, 560, 20, 60);
         rect(100, 560, 20, 60);
         fill(pastelAlaranjado);
         circle(80, 560, 20,60);
         rect(80, 560, 20,60);
       
         fill(cinza);
         circle(60, 560, 20, 60);
         rect(60, 560, 20, 60);
         fill(verdeEscuro);
         circle(40, 560, 20, 60);
         rect(40, 560, 20, 60);
         fill(laranjaPastel);
         circle(20, 560, 20, 60);
         rect(20, 560, 20, 60);
         fill(verdeClaro);
         circle(0, 560, 20, 60);
         rect(-20, 560, 40, 60); 
        */
         
         //Circles Legenda//
         fill(azul);
         circle(-150, 560, 15, 60);
         circle(-150, 620, 20, 70);
         circle(-150, 700, 30, 90);
         circle(-150, 800, 40, 100);
  }

function textos(){
        
        //OPÇÃO DE MARCAÇÃO DE REFERÊNCIA DE SUBDIVISÕES DO COMPASSO//
                /*text('16 = 0',-20, -350, width);
        text('2',250, -240, width);
        text('1',125, -325, width);
        text('3',325, -130, width);
        text('4',350, 5, width);
        text('5',320, 140, width);
        text('6',250, 250, width);
        text('7',120, 335, width);
        text('8',-5, 365, width);
        text('9',-150, 330, width);
        text('10',-260, 265, width);
        text('11',-350, 130, width);
        text('12',-370, 0, width);        
        text('13',-340, -130, width);
        text('14',-270, -240, width);
        text('15',-160, -320, width); */ 
        
        strokeWeight(1);
        stroke(0);
        textSize(15); //18
        //text(' Track 1 =', 620, -300, width);
        text(' Track 2 = Bateria', 620, -280, width);
        text(' Track 3 = Piano', 620,-260 , width);
        text(' Track 4 = Saxofone', 620, -240, width);
        text(' Track 5 = Baixo', 620, -220, width);
        text(' Track 6 = Piano', 620, -200, width); 
        /*text(' Track 7 = Bateria', 620, -180, width);       
        
        text(' Track 8 = Percussão', 620,-160 , width);
        text(' Track 9 = Violino I', 620, -140, width);
        text(' Track 10 = Violino II ', 620, -120, width);
        text(' Track 11 = Viola I', 620,-100 , width);
        text(' Track 12 = Violoncelo', 620, -80, width);
        text(' Track 13 = Contrabaixo', 620, -60, width);
        //text(' Track 14 = ', 620, -40, width);
        //text(' Track 15 =  ', 620, -20, width);
        //text(' Track 16 ', 620, 0, width);     */

        
       //tracknames =[ voz, Guitarra 1, guitarra 2, Baixo, Piano, Bateria]
}

//Botão tocar música//
function tocarMusica(){
  createP('');
  button=createButton("PLAY");     
  button.size(180,50);
  button.position(20, 400);
  button.style("font-family","CaviarDreams");
  button.style("background-color","#E3E3E3");
  button.style("font-size", "16px");
}

function drawCursorAcompanhamento(){
  // Executar em tempo real um cursor para acompanhamento da música//
  
  /*if(setBPM  > 0 && counter%int(30*60/setBPM) == 0){
  }*/
  
    let x = raioFundo * cos(time);
    let y = raioFundo * sin(time);
    
    
    stroke(0);
    fill(0);
    ellipse(x,y, ellipseWidth, ellipseWidth);
    //fill(255,0,0);
    //ellipse(x,y, ellipseWidth-5, ellipseWidth-5);
    time += 0.001;

  
  // peakDetect accepts an fft post-analysis
    fft.analyze();
    peakDetect.update(fft);
    
    
  if ( peakDetect.isDetected ) {
    ellipseWidth = 5;
  } else {
    ellipseWidth *= 0.005;
  }
}


function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
  drawCursorAcompanhamento();
  if(sound.isPlaying()){
  sound.stop();
  sound.setVolume(0.3);
  button.html("STOP");
    cursorAnimado();
}else {
  sound.play();
 
  button.html("PLAY");
}
  button.style("font-family","CaviarDreams");
  button.style("background-color","#E3E3E3");
  button.style("font-size", "16px"); 
 }
 
}


function menu(){
  redraw(); 
}

function mouseClickedMenu(){
    createP('');
  button = createButton('SAVE VISUAL MUSIC');
  button.size(400, 50);
  button.position(230, 400);
  button.mousePressed(menu);
  button.style("font-family","CaviarDreams");
  button.style("background-color","#E3E3E3");
  button.style("font-size", "16px");
}


function mouseClickedSave(){
  save('analisemusical.jpg');  
}

function SaveAnalise (){
     
  createP('');
  button = createButton('SAVE VISUAL MUSIC');
  button.size(180, 50);
  button.position(230, 400);
  button.mousePressed(mouseClickedSave);
  button.style("font-family","CaviarDreams");
  button.style("background-color","#E3E3E3");
  button.style("font-size", "16px");
  
}

function cursorAnimado(){
  background(255);
 //CURSOR
 raioSegundos = raioFundo;      
 cx = width / 2;
 cy = height / 2;
  // Draw the clock background
  // Angles for sin() and cos() start at 3 o'clock;
  // subtrai HALF_PI para começar o ponteiro no topo
  //map (valor, start1, stop1, start2, stop2, [withinBounds])
  //let s = map(second(), 0, 60, 0.5, TWO_PI, [120]) - HALF_PI;
  bpm = 120 // 150 = 0.4 //120 = 0.5 // 90 = 0.6
  batidaConstante= (xCursor / bpm)*PI/10; //razão para bpm ficar constante em segundos
  batida = 0.5;//batida em segundos
  //HALF_PI = 1/4 de um circulo //TWO_PI circulo completo
  let s = map(second(), 0, batida,0,batidaConstante)-HALF_PI;
  ellipseMode(CENTER);
          noFill();
          stroke(146);
          strokeWeight(1);
        circle(cx,cy, 380);
  // Draw the hands of the clock
  fill(0);
  strokeWeight(8);
  stroke(0);
  //line(cx, cy, cx + cos(s) * raioSegundos, cy + sin(s) * raioSegundos);
  ellipse(cx + cos(s) * raioSegundos, cy + sin(s) * raioSegundos, 10);
}
