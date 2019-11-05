var bird;
var pipes = [];

function setup() {
  createCanvas(600, 500);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  
  if(frameCount < 500){
  telaInicial();
  }else{//passou os 8 segundos
  jogo();
  }
}


function telaInicial(){
fill("deepSkyBllue");//preenchimento do retangulo
  rect(0, 0, 600, 500);
  fill("deepPink");
  textAlign(CENTER);
  textSize(20);
  text("- SENAI Serviço Nacional de Aprendizagem Industrial.",250,100);
  text("- Aprendizagem industrial em programador de computador.",300,150);
  text("- Linguagem de programação web.",225,200)
  text("- Tarcisio nunes.",180,250)
  text("- Lucas kempner,André oliveira,joao dranka",340,300)
  
}



function jogo(){
   background(200);
  
  //console.log(frameCount);
  

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);

    }
  }

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
  

}


function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}