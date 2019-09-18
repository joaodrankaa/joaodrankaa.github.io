//definição das variaveis do jogo
let imagemDaEstrada;
let imagemDoAutor;
let imagemDoCarro = [];
let imagemDoAutor2;

//sons
let trilhaSonora;
let somColidiu
let somPonto



//pré carregamento das imagens nas variaveis
function preload(){
  //sons
 trilhaSonora = loadSound("sons/trilha.mp3");
 somColidiu = loadSound("sons/colidiu.mp3");
 somPonto = loadSound("sons/pontos.wav");
  //imagens
 imagemDaEstrada = loadImage("imagens/estrada.png");
 imagemDoAutor = loadImage("imagens/ator-1.png");
 imagemDoCarro[0] = loadImage("imagens/carro-1.png");
 imagemDoCarro[1] = loadImage("imagens/carro-2.png")
 imagemDoCarro[2]= loadImage("imagens/carro-3.png")
 imagemDoCarro[3] = loadImage("imagens/carro-1.png");
 imagemDoCarro[4] = loadImage("imagens/carro-2.png")
 imagemDoCarro[5]= loadImage("imagens/carro-3.png")
}
