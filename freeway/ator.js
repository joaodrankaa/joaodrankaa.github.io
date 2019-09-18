//ator
let yAtor = 366;
let xAtor = 237;
let colidiu = false;
let placar = 0;


function mostrarPlacar(){
  if(yAtor < 15){
  placar +=1;
  voltaAtorParaPosicaoInicial(); 
  somPonto.play(); 
  }
  textAlign(CENTER);
  textSize(25);
  fill(255,240,60);
  text(placar,250,30);

}

 function verificaColisao(){
//collideRectCircle(r1, r1, rlargura, raltura, cx, cy, diameter)
 for(let i=0; i < imagemDoCarro.length; i++){
 colidiu =  collideRectCircle (xCarro[i], yCarro[i],  comprimentoCarro[i], altura, xAtor, yAtor,15);
 if(colidiu){
  console.log("colidiu");
   voltaAtorParaPosicaoInicial();
   somColidiu.play();
   
   if(placar > 0)
     placar -= 1; 
 
  }  
 }
}
function voltaAtorParaPosicaoInicial(){
yAtor = 366;
}
  


  function mostraAtor(){
  image(imagemDoAutor,xAtor, yAtor,30,30);
}

  function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
  if(yAtor > 5)
  yAtor -= 4;
}
  
if(keyIsDown(DOWN_ARROW)){
if(yAtor < 366)
  yAtor += 4;
    }

}


