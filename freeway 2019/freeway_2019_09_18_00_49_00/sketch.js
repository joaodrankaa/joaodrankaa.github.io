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
  mostraAtor2();
  movimentaAtor2();
  
 
}//fim do draw

 





 