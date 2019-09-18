//ator
let yAtor = 366;
let xAtor = 190;
//ator2
let yAtor2 = 366;
let xAtor2 = 290;


let colidiu = false;
let placar = 0;
let placar2 = 0;



function mostrarPlacar(){
  if(yAtor < 15){
  placar +=1;
  voltaAtorParaPosicaoInicial(); 
  somPonto.play(); 
}
  textAlign(CENTER);
  textSize(25);
  fill(255,240,60);
  text(placar,190,30);
  
}
  //placar ator2
  function mostrarPlacar2(){
   if(yAtor2 < 15){
  placar2 +=1;
  voltaAtorParaPosicaoInicial2(); 
  somPonto.play(); 
}
  textAlign(CENTER);
  textSize(25);
  fill(255,240,60);
  text(placar2,300,30);
  
}


 function verificaColisao(){

   
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
   
for(let i=0; i < imagemDoCarro.length; i++){
colidiu =  collideRectCircle (xCarro[i], yCarro[i],        comprimentoCarro[i], altura, xAtor2, yAtor2,15);
  if(colidiu){
   console.log("colidiu");
    voltaAtorParaPosicaoInicial2();
     somColidiu.play();
   
   if(placar2 > 0)
     placar2 -= 1; 
  }  
 }    
}

 

  function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

  function voltaAtorParaPosicaoInicial2(){
  yAtor2 = 366;
}
  
  

  function mostraAtor(){
  image(imagemDoAutor,xAtor, yAtor,30,30);
  //ator2
  image(imagemDoAutor,xAtor2, yAtor2,30,30); 
}

  function movimentaAtor(){
  if(keyIsDown(87)){
  if(yAtor > 5)
  yAtor -= 6;
}
  
  if(keyIsDown(83)){
  if(yAtor < 366)
  yAtor += 6;
}
            
    
//ator2
    
  if(keyIsDown(UP_ARROW)){
  if(yAtor2 > 5)
  yAtor2 -= 6;
}
  
 if(keyIsDown(DOWN_ARROW)){
 if(yAtor2 < 366)
  yAtor2 += 6;
}
}


function players (){
 
    textSize(15);
    textAlign(CENTER);
    fill('black');
    text('Player 1', 95, 385);
    text('Player 1', 95, 385);
    text('Player 2', 380, 385);
    text('Player 2', 380, 385);

}


function pontuacao(){
  if(placar > 9){
    background(255);
    textSize(32);
    textAlign(CENTER);
    fill('green');
    text('Player Um venceu!', 250, 200);
    frameRate(0);
  }
  if(placar2 > 9){
    background(255);
    textSize(32);
    textAlign(CENTER);
    fill('green');
    text('Player Dois venceu!', 250, 200);
    frameRate(0);
  }
}

