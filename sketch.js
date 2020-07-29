//variaveis do jogador
var jogador_x = 500 , jogador_y = 260, jogador_yp = 0, img_jogador = [];

//coordenadas do inimigo 1
var inimigo1_x = 0, inimigo1_y = 340, img_lenhador = [], imglenhador = 1;

//coordenadas dos amigos 1 e 2
var amigo1_x = 0, amigo1_y = 260, img_arvore = [];

//var tela
var tela = 0, tempo = 0, colisao = false ;

//variavel images
var img_fundo = []; 

//jogador variaveis qualquer

velocidade = 2, cont = 0, nivel = 0, pontos = 0;

var pulo = false, pulo_y = 0; // coordendas do pulo

var pulo_x0, pulo_y0 = 0; // coordendas da origem do pulo

var raioB=25;  //raio do inimigo
var raio0=25;  //raio do jogador 

//var menu
var xMenu = 180, yMenu1 = 140, yMenu2 = 200, yMenu3 = 260, largura = 200, altura = 50;

function preload(){
  
    img_fundo[0] = loadImage('menu.jpg')

    img_fundo[1] = loadImage('capa.jpg')
    
    img_fundo[2] = loadImage('capa1.jpg')

    img_fundo[3] = loadImage('fundo1.jpg')
  
    img_fundo[4] = loadImage('fundo2.jpg')
  
    img_fundo[5] = loadImage('fundo5.png')  
  
    img_fundo[6] = loadImage('programador.jpeg')  

    img_fundo[7] = loadImage('educador.jpeg')  


    //jogador
    img_jogador[1] = loadImage('jogador1.png')
	
	//amigo
	img_arvore[1] = loadImage('arvore.png')
	
    //icones
    for(i=1; i<=12; i++)
    img_lenhador[i] = loadImage('lenhador.png')

}

function setup(){
    createCanvas(600,400);
}

function draw(){

  //Tela de Menu
  if (tela == 0) {
    background(img_fundo[0]);
    //Título
    fill(0);
    noStroke(0);
    text("SALVANDO A FLORESTA", 280, 80);
    
    //Menu com três opções
    //Iniciar o Jogo
    textAlign(CENTER);
    textSize(30);
    
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura) {
       stroke(200);
       fill(250);
       rect(xMenu, yMenu1, largura, altura, 15);
       if (mouseIsPressed) {
      tela = 1;
     }
    }
    fill(0);
    noStroke(0);
    text("Iniciar", 280, 175);
    
    //Instruções do Jogo
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura) {
       stroke(200);
       fill(250);
       rect(xMenu, yMenu2, largura, altura, 15);
       if (mouseIsPressed) {
      tela = 5;
     }
    }
    
    fill(0);
    noStroke(0);
    text("Instruções", 280, 235);
    
    //Créditos
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura) {
       stroke(200);
       fill(250);
       rect(xMenu, yMenu3, largura, altura, 15);
       if (mouseIsPressed) {
      tela = 6;
     }
    }
    
    fill(0);
    noStroke(0);
    text("Créditos", 280, 295);
    
  }
}

function setup(){
    createCanvas(600,400);
}

function draw(){

  //Tela de Menu
  if (tela == 0) {
    background(img_fundo[0]);
    //Título
    fill(0);
    noStroke(0);
    text("SALVANDO A FLORESTA", 280, 80);
    
    //Menu com três opções
    //Iniciar o Jogo
    textAlign(CENTER);
    textSize(30);
    
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura) {
       stroke(200);
       fill(250);
       rect(xMenu, yMenu1, largura, altura, 15);
       if (mouseIsPressed) {
      tela = 1;
     }
    }
    fill(0);
    noStroke(0);
    text("Iniciar", 280, 175);
    
    //Instruções do Jogo
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura) {
       stroke(200);
       fill(250);
       rect(xMenu, yMenu2, largura, altura, 15);
       if (mouseIsPressed) {
      tela = 5;
     }
    }
    
    fill(0);
    noStroke(0);
    text("Instruções", 280, 235);
    
    //Créditos
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura) {
       stroke(200);
       fill(250);
       rect(xMenu, yMenu3, largura, altura, 15);
       if (mouseIsPressed) {
      tela = 6;
     }
    }
    
    fill(0);
    noStroke(0);
    text("Créditos", 280, 295);
    
  }
	   //tela inicial
   
		if(tela == 1){
			background(img_fundo[1]);
			textSize(30); 
			fill(265);
			text("Cuidado com o lenhador...", 200, 320);
			textSize(18); 
			text("e tente salvar o máximo de ávores que puder!(Aperte ENTER)", 280,360);
		if (keyIsDown(ENTER) ) {
			tela = 2; 
		  } 
		    } 
    
		if(tela == 2){
			background(img_fundo[2]);
			textSize(18); 
			fill(265);
			text("Lembre-se: a cada árvore salva, você ganha 10 pontos,", 270, 320); 
			text("e se você encostar no lenhador, a floresta será dematada!", 280,350);
			
	//fazer mudança de tela
	
	    if(imglenhador<=12){
		image(img_lenhador[imglenhador],inimigo1_x,370,40,40)
            imglenhador++
        }else{
            imglenhador = 1
        }
          inimigo1_x = inimigo1_x + velocidade
        }
		if (inimigo1_x > 600){
			tela = 3
		}
		
    //tela dentro do jogo
    
        if(tela == 3){
			background(img_fundo[3]);
			
     //jogador
     
        if(pulo == false){
            image(img_jogador[1], jogador_x, jogador_y, 100, 130)
        }
        if (keyIsDown(UP_ARROW) && (! pulo) ){ 
             pulo = true; 
             contFrames = 1; 
        }
        
      // movimentação do pulo
       
        if (pulo == true) {
             image(img_jogador[1], jogador_x, jogador_y + jogador_yp, 100, 130)
             contFrames++; // movimenta o pulo  
             jogador_yp = 0.6*(contFrames)*(contFrames - 38);
			 pulo_y0 = jogador_yp
											//Se o valor da amplitude do pulo for menor que zero
        if (jogador_yp >= 0) {
											// O pulo deve ser finalizado habilida a ocorrência de um novo pulo 
			pulo = false;
            jogador_yp = 260; 	
        }
        }
        
	//lenhador
                
        if(imglenhador<=12){
            image(img_lenhador[imglenhador],inimigo1_x,inimigo1_y,60,60)
            imglenhador++
        }else{
            imglenhador = 1
        }
        
	//colisao (inimigo)
	
		if( (inimigo1_x == 490)  && (inimigo1_y == (jogador_y  + 80 + pulo_y0) ) ){
             pulo_y0 = 0
		     tela = 4
        }
             inimigo1_x = inimigo1_x + velocidade

				
        if(inimigo1_x >= 700){
			 nivel = nivel+1
             inimigo1_x = 0
        if (nivel>3 && nivel<5){
			 velocidade = velocidade+5
			 inimigo_x = 0
		}if (nivel>10 && nivel<20){
			 velocidade = velocidade+0.5
			 inimigo_x = 0
		}if (nivel>25 && nivel<30){
			 velocidade = velocidade+1
			 inimigo_x = 0
	    }if (nivel>30 && nivel <120){
			 velocidade = velocidade
			 inimigo_x = 0
	    }if (nivel>120){
			 velocidade = velocidade+2
			 inimigo_x = 0
	    }
		}
               
	//árvore 
			image(img_arvore[1],amigo1_x,amigo1_y, 50,50)
			amigo1_x = amigo1_x+4
	
	//colisao (amigo)
	
		if( (amigo1_x == 500)  && (amigo1_y == (jogador_y +pulo_y0) ) ){
             pontos = pontos+10
             amigo1_x = 0
         }
       
         if(amigo1_x > 600){
			amigo1_x = random (100);}
	        textSize(20); 
            fill(265);
            text("VAMOS SALVAR A FLORESTA!", 280, 60);
            text("Nível: "+(nivel), 100, 90);
            text("Pontuação:" +(pontos), 400,90);       
        }
              
        if(tela==4){			
			background(img_fundo[4]);
			textSize(50); 
			fill(255);
			text("Ahhhh...",390,180);
			textSize(20); 
			text("Você não conseguiu salsar a floresta - nível " +(nivel),280,310);
			text("Sua pontuação foi: " +(pontos),300,350);
			
		if (keyIsDown(ENTER) ) {
           window.location.reload()  // reinicia o jogo
        } 
		}
  
   //Informaçoes do jogo
     if(tela == 5){
            background(img_fundo[5]);
            fill(265);
            textSize(28);
			text("INFORMAÇÕES",290,50);
			textSize(20); 
			text("Jogo trata-se de uma crítica ao desmatamento.",295,100);
            text("Para os alunos de nível fundamental 1 ao 3.",295,150);
            text("Intuito de conscientizar a preservação e cuidado com a natureza.",295,200);
     if (keyIsDown(ENTER) ) {
           window.location.reload()  // reinicia o jogo
			
   }
     }
  
  //Créditos
     if(tela == 6){
            background(img_fundo[5]);
            image(img_fundo[6],90,60,120,120);
            image(img_fundo[7],90,240,120,120);
            fill(265);
            textSize(28);
            text("CRÉDITOS",290,50);
            textSize(20);
			text("PROGRAMADOR",390,120);
            text("Ângela Oliveira",390,150);
			textSize(20); 
			text("EDUCADOR",390,280);
            text("Juçara Silva",390,310);
     
     if (keyIsDown(ENTER) ) {
           window.location.reload()  // reinicia o jogo
   }
}
}
//https://github.com/alegna-m/Jogo/blob/master/Silly_gold_2020_07_28_22_04_45.zip
//https://www.youtube.com/watch?v=CQ-FcYuG7HI
//https://youtu.be/XDBtMjANLVA