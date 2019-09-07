//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro/2;
let corBolinha = [105,18,219];
let velocidadeX = 7;
let velocidadeY = 7;

//Variáveis Raquete
let alturaRaquete = 100;
let larguraRaquete = 20;

//Variáveis Minha Raquete
let xMinhaRaquete = 580;
let yMinhaRaquete = 150;
let corMinhaRaquete = [0, 0, 0]; //Preto

//Variáveis Raquete do Oponente
let xRaqueteOponente = 0;
let yRaqueteOponente = 150;
let corRaqueteOponente = [0,0,0];//RGB

//Variáveis do Placar
let pontosMeus = 0;
let pontosOponente = 0;

let ponto;
let raquetada;

function preload(){
raquetada = loadSound('raquetada.mp3');
ponto = loadSound("ponto.mp3");
}

//Configuração Inicial
function setup() {
createCanvas(600, 400);
largura = width;
altura = height;
print("Largura: "+largura+" Altura: "+altura);

}
//Desenha - Looping infinito while(1) / Sempre
function draw() {
background(222, 58, 13);//Amarelo
//Se os pontosMeus não forem maiores ou 
//iguais a 10 ou os pontos do oponente
//não forem maiores ou igual a 10, então
//JOGA!
if(!(pontosMeus >= 10 || pontosOponente >=10))
jogo();
else
mostraVencedor();
} //draw - desenha

function mostraVencedor(){
if(pontosMeus >= 10){
fill(255,130,0);//Laranja
rect(300,0,300,400);//Metade direita da tela
textAlign(CENTER);
fill(0);//Texto preto
noStroke();
textSize(30);
text("Lado direito é campeão",300,200);
}else{//copia e cola tudo ali de cima!
fill(255,130,0);//Laranja
rect(0,0,300,400);//Metade esquerda da tela
textAlign(CENTER);
noStroke();
fill(0);//Texto preto
textSize(30);
text("Lado esquerdo é campeão",300,200);
}
}

function jogo(){
mostraBolinha();
movimentaBolinha();
verificaColisao(); 
mostraRaquete();
movimentaMinhaRaquete();
movimentaRaqueteOponente();
verificaColisaoRaquete();
marcaPonto();
mostraPlacar();
}

function mostraPlacar(){
textSize(30);
strokeWeight(4);//Largura da borda
stroke(93, 36, 173);//cor da borda = Roxo

fill(0,200,0);//Retângulo verde
rect(427,12,60,35,10);//retângulo Meus pontos
rect(127,12,60,35,10);//retângulo do oponente

fill(255); //Texto Branco
textAlign(CENTER);//Alinhamento centralizado do texto
text(pontosMeus, 450, 40);
text(pontosOponente, 150, 40);
}

function marcaPonto(){
if(xBolinha < 10){
//Incrementar os pontos
pontosMeus += 1; //pontosMeus = pontosMeus + 1
ponto.play();
} 
if(xBolinha > 590){
pontosOponente += 1; 
ponto.play();
} 
//print("Meu pontos: "+pontosMeus+" Oponente: "+pontosOponente);
}// Função marcaPonto não me delete



//criação das funções
function verificaColisaoRaquete(){

if(xBolinha + raio > xMinhaRaquete && 
yBolinha - raio < yMinhaRaquete + alturaRaquete && 
yBolinha + raio > yMinhaRaquete){

if(!(xBolinha < 300 && velocidadeX > 0 || 
xBolinha > 300 && velocidadeX < 0)){
velocidadeX *= -1;
raquetada.play();
}

}//Minha Raquete
  
//RAQUETE OPONENTE
if(xBolinha - raio < xRaqueteOponente + larguraRaquete && 
yBolinha - raio < yRaqueteOponente + alturaRaquete && 
yBolinha + raio > yRaqueteOponente){

if(!(xBolinha < 300 && velocidadeX > 0 || 
xBolinha > 300 && velocidadeX < 0)){
velocidadeX *= -1; 
raquetada.play();
} 

}//Raquete do Oponente

} //Não me deleta pelo amor de Deus

function movimentaMinhaRaquete(){ 

if(keyIsDown(UP_ARROW)){//SETA_PARA_CIMA - 87 W

if(yMinhaRaquete < 0){
yMinhaRaquete = 0; //Corrigindo
}else{
yMinhaRaquete -= 10; //Velocidade da Raquete
} 
}

if(keyIsDown(DOWN_ARROW)){//SETA_PARA_BAIXO - 83 S
if(yMinhaRaquete > 300){
yMinhaRaquete = 300; //Corrigindo
}else{
yMinhaRaquete += 10; //Velocidade da Raquete
}
} 
}

function movimentaRaqueteOponente(){ 
if(keyIsDown(87)){//SETA_PARA_CIMA - 87 W

if(yRaqueteOponente < 0){//Em cima
yRaqueteOponente = 0; //Corrigindo
}else{
yRaqueteOponente -= 10; //Velocidade da Raquete
} 
}

if(keyIsDown(83)){//SETA_PARA_BAIXO - 83 S
if(yRaqueteOponente > 300){//Embaixo
yRaqueteOponente = 300; //Corrigindo
}else{
yRaqueteOponente += 10; //Velocidade da Raquete
}
} 
}



function mostraRaquete(){
//Mostra minha raquete à direita
fill(corMinhaRaquete);
rect(xMinhaRaquete, yMinhaRaquete, 
larguraRaquete, alturaRaquete);
//Mostra Raquete do Oponente à esquerda
fill(corRaqueteOponente);//COR
rect(xRaqueteOponente, yRaqueteOponente,
larguraRaquete, alturaRaquete); 
}

//Cenário - Bordas da tela
function verificaColisao(){
//Colisão Horizontal com bordas laterais
if (xBolinha + raio > largura || xBolinha - raio < 0){
//velocidadeX = velocidadeX * -1
velocidadeX *= -1;
}
//Colisão Vertical com bordas superior e inferior
if (yBolinha + raio > altura || yBolinha - raio < 0){
velocidadeY *= -1;
}
}

function movimentaBolinha(){
if(frameCount > 300){
//Velocidade Horizontal
xBolinha += velocidadeX;//Incremento de X
//Velocidade Vertical
yBolinha += velocidadeY;//Incremento de Y
}//1 - if frameCount
}//2 - Movimenta Bolinha

function mostraBolinha(){
noStroke();
fill(corBolinha);
circle(xBolinha,yBolinha,diametro);
}
