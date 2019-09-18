function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop();
}

function draw() {
  background(imagemDaEstrada);
  movimentaAtor();
  mostraAtor(); 
  mostraCarro();
  movimentaCarro();
  verificaColisao();
  mostrarPlacar(); 
  mostrarPlacar2();
  pontuacao();
  players();
  
  
  
}//fim do draw

 





 