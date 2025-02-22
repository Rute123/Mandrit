//MANDRIT -  Quantidade de notas em funcao do tempo cíclico
//BUBBLE CHART// COMPASSO 4/4

let airData;
let raioFundo = 380;
let raioFundoComposto = 380;
let tempo;
let comprimentoCirculo = 64;
let raioMenor = 120; // espaçamento entre circulos circunscritos
let raioMaior = 300;
let tamanhoMenor = 1;//1//1//0.5/0.1 - PROPORCAO
let tamanhoMaior = 3;//3//5
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
var xConversor= 60 ;

let button;
var ellipseWidth = 10;
let time = 0


function preload(){
  airData = loadTable("csv_musics/Plotar_Musicas_Bubble/Finais/bateriTEMPO_Granularidade32.csv",
    "csv",
    "header");
    
     sound = loadSound('ArquivoMusicas/bateria04_Oficial150.mp3');
    
  
    font = loadFont('assets/CaviarDreams.ttf');
}

function setup() {
  createCanvas(1780, 840);
  center = createVector(width/2, height/2);
  maxRadius = min(center.x, center.y) * 0.9;
  noStroke();
  //noLoop();
  
  background(255); 
  ellipseMode(CENTER);
  textFont(font);

    //Funcao SaveAnalise - inclui botao de play em musica para facilitar análise e seu download da visualizacao. 
  SaveAnalise();
  tocarMusica();
   rotate(PI/-2);

        
 ///RANGE DE CORES///
 //Faixa 1//Conducao
 amarelo = color(254,250,104);
cores.push(amarelo);
amarelo.setAlpha(128 + 128 * sin(millis() / 5000));
//Faixa 2//conducao 
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
 legenda = airData.getColumn("X");
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
                text('Amount of notes', 1450, 480, width);
                //alterada de acordo com a musica plotada
                text('Time Signature: 4/4', 1430, 660, width); //5/4 ou 2/4 ou 3/4...
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


//Dados musicais extraidos do MIDI associados a representacao//
function drawDados(){
    
    indiceCor = 0;

  for(let i = 0; i< airData.getRowCount(); i++){
    let tempoAtual = airData.getNum(i,"Y");
    let posicao = map(tempoAtual, tempomin, tempomax, 0, comprimentoCirculo-1);
    let faixaAtual = airData.getNum(i,"X");
    let faixaLegenda = airData.getNum(i,"X");
    let indice = criarOuAtualizarFaixa(faixaAtual);
    let faixa = faixas[indice];
    let raio = map(faixaAtual, faixamin, faixamax, raioMaior, raioMenor);
    let tamanhoAtual = airData.getNum(i,"Total_de_notas");
    let tamanho = map(tamanhoAtual, tamanhomax, tamanhomin, tamanhoMaior, tamanhoMenor);
    
    fill(faixa.cor);
    //Funcoes que trazem as propriedades das formas geometricas           
    drawCircles(comprimentoCirculo,raio, posicao, tamanho);
    drawLegenda(faixaLegenda);
  }
}
//Indica a quantidade de Faixas no csv para realizar a projecao de acordo com suas cores
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
//INCLUI CIRCULOS NA SEQUENCIA ÂNGULAR (EM FUNCAO DO CICLO TEMPORAL POLAR)
function drawCircle(angle, i, radius,circleRadius){
  xCircle = cos(angle*i) * radius;
  yCircle = sin(angle*i) * radius;

   ellipse(xCircle, yCircle, circleRadius*2, circleRadius*2);
}

//ASSOCIA CIRCULOS EM FUNCAO DA QUANTIDADE
function drawCircles(circles, radius, i, tamanho){
    angle = Math.PI*2 / circles;
    circleRadius = sin(angle/2) * radius *tamanho;
    ellipseMode(CENTER);
    
    //Reitera o draw tambem em funcao do tempo//
    drawCircle(angle, i, radius,circleRadius);
}

 //Referencia do compasso ao fundo de acordo com a formula do compasso
function drawCirclefundo(){
  
  //Opcao Nogrid:
    //stroke(0);
    //fill(0);
    //circle(0,0,340);
  
  
    ellipseMode(CENTER);
    stroke(146);
    noFill();
    
    circles = 4; ////2 para musicas 2/4; 3 para 3/4;  4 para 4/4; 5 para 5/4;
    angleFundo = Math.PI*2 / circles;

    circleRaiofundo = sin(angleFundo/16);
    
    for(var i = 0; i < circles; i++){
        xCircle = -sin(angleFundo*i) * raioFundo;
        yCircle = -cos(angleFundo*i) * raioFundo;
        ellipseMode(CENTER);
        strokeWeight(1);
        point(xCircle, yCircle, circleRaiofundo, circleRaiofundo); //+5, +10
        
               //circle(xCircle,yCircle , 380);
        strokeWeight(1);
        line(xCircle,yCircle , circleRaiofundo, circleRaiofundo)+10; 
        
    } 
} 

 //Maracação fixa ao fundo para compassos compostos Ex: 12/8 9/8 
function drawCirclefundoComposto(){
  
    ellipseMode(CENTER);
    stroke(146);
    noFill();
    circles = 16; //20 para 5/4 16 para 4/4
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

  function drawLegenda(faixaLegenda){
  
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
          /*fill(marron);         
         circle(200, 560, 20, 60);
         rect(200, 560, 20, 60);
     
         
         fill(magenta);
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
  strokeWeight(1);  
  textSize(20);
        stroke(0);
        //OPÇÃO DE MARCAÇÃO DE REFERÊNCIA DE SUBDIVISÕES DO COMPASSO 4/4
        text('1',-5, -390, width);
        text('2',390, 0, width);
        text('3',-10, 410, width);
        text('4',-400, 0, width);  
        

        //OPÇÃO DE MARCAÇÃO DE REFERÊNCIA DE SUBDIVISÕES DO COMPASSO 5/4
        /*text('1',-10, -350, width);
        text('2',340, -110, width);
        text('3',220, 300, width);
        text('4',-240, 300, width);
        text('5',-360, -110, width); */
        
        //OPÇÃO DE MARCAÇÃO DE REFERÊNCIA DE SUBDIVISÕES DO COMPASSO 2/4
        /*text('1',-10, -350, width);
        text('2',-10, 365, width);*/
        
        //OPÇÃO DE MARCAÇÃO DE REFERÊNCIA DE SUBDIVISÕES DO COMPASSO 3/4
        /*text('1',-10, -350, width);
        text('2',320, 190, width);
        text('3',-340, 190, width);*/      

        //DEPENDENDO DA MÚSICA QUE FOR PLOTAR COMENTAR QUAIS TRACKS ESTÃO OU NÃO NA LEGENDA     
        strokeWeight(1);
        stroke(0);
        textSize(15); //18
        //text(' Track 1 =', 620, -300, width);
               //text(' Track 2 = Bateria(condução)', 620, -280, width);
        text(' Track 2 = Drums(conducting pattern)', 620, -280, width);
        text(' Track 3 = Drums(Signature - Lowest)', 620,-260 , width);
        text(' Track 4 = Drums(Signature - Highest)', 620, -240, width);
        text(' Track 5 = Drums(Flourish)', 620, -220, width);
/*
        //text(' Track 6 = Piano', 620, -200, width);
        text(' Track 7 = Baixo', 620, -180, width);      
        text(' Track 8 = Bateria I', 620,-160 , width);
        text(' Track 9 = Bateria II', 620, -140, width);
        text(' Track 10 = Violino II ', 620, -120, width);
        text(' Track 11 = Viola I', 620,-100 , width);
        text(' Track 12 = Violoncelo', 620, -80, width);
        text(' Track 13 = Contrabaixo', 620, -60, width);
        //text(' Track 14 = ', 620, -40, width);
        //text(' Track 15 =  ', 620, -20, width);
        //text(' Track 16 ', 620, 0, width);     */
}

//Botao tocar musica//
function tocarMusica(){
  createP('');
  button=createButton("PLAY");     
  button.size(180,50);
  button.position(20, 400);
  button.style("font-family","CaviarDreams");
  button.style("background-color","#E3E3E3");
  button.style("font-size", "16px");
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
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
 raioSegundos = raioFundo;      
 cx = width / 2;
 cy = height / 2;
  // ANIMA CURSOR AO FUNDO
  // subtrai HALF_PI para começar o ponteiro no topo

  bpm = 120 // 150 = 0.4 //120 = 0.5 // 90 = 0.6
  batida= (xConversor/ bpm); //razão para bpm ficar constante em segundos
   //tamanhoMusica = 5; //em segundos
  //HALF_PI = 1/4 de um circulo //TWO_PI circulo completo
  //map (objetoConversão, menorValorAtual, maiorValorAtual, menorValorintervalo,maiorValorintervalo, [withinBounds])
  let s = map(second(), 0,batida, 0, batida*PI/2)-HALF_PI;
  ellipseMode(CENTER);
          noFill();
          stroke(146);
          strokeWeight(1);
        circle(cx,cy, 380);
  // Draw the hands of the clock
  fill(0);
  strokeWeight(5);
  stroke(0);
  //line(cx, cy, cx + cos(s) * raioSegundos, cy + sin(s) * raioSegundos);
  ellipse(cx + cos(s) * raioSegundos, cy + sin(s) * raioSegundos,10);
}
