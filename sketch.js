/*Chronophobia.prjct
Author:     Eli Major-Wright
Email:     majorwrightme@g.cofc.edu
MTI695
# FinalD
# Due Date:   February 12, 2018
#
#
#*/



var rectSizeTop = 100;
var rectSizeMid = 150;
var rectSizeBot = 124; 
var GrectX, GrectY, OrectX, OrectY, TrectX,TrectY,ArectX,ArectY,MrectX, MrectY,NrectX,NrectY,UrectX,UrectY,Trect2X,Trect2Y,ErectX,ErectY;
var MelodybuttonCounter = 0;
var ClockbuttonCounter = 0;
var DrumsbuttonCounter = 0;
var buttonCounter4 = 0;
var RiffbuttonCounter = 0;
var BHbuttonCounter = 0;
var ViolinbuttonCounter = 0;
var buttonCounter7 = 0;
var buttonCounter8 = 0;
var BabybuttonCounter =0;
var ShimmerbuttonCounter = 0;
var GuitarbuttonCounter = 0;
var melody, clock, drums,vibslap, riff, violin, chimes, woodblock, baby, guitar, beehorn;



var clockcheck = 0;
var melodycheck = 0;
var horncheck = 0;
var drumscheck = 0; 
var shimmercheck = 0;
var guitarcheck = 0;
var riffcheck = 0;
var gamestart;
var drawwin;
var wrong;


let myFont;


function preload() {
  myFont = loadFont('fonts/digital dark system.ttf');
}

function setup(){
  createCanvas(700, 700); 
 
  img = loadImage('display/chronophobia.JPG');
 // soundFormats('wav');
  melody = loadSound('sounds/youth melody4.mp3');
  baby = loadSound('sounds/baby talk.mp3');
  guitar = loadSound('sounds/guitar.mp3');
  beehorn = loadSound('sounds/horn bee.mp3');
  clock = loadSound('sounds/clock tick.mp3');
  drums = loadSound('sounds/youth drums.mp3');
  vibslap = loadSound('sounds/vibraslap.mp3');
  riff = loadSound('sounds/running riff.mp3');
  violin = loadSound('sounds/violin loop.mp3'); // DANNY: try adding 'sounds/' to the beginning
  chimes = loadSound('sounds/youth chimes.mp3'); // DANNY: and here
  woodblock = loadSound('sounds/woodblock.mp3'); // DANNY: here too :)
  
  
gamestart = false;
  rectMode(CENTER);  
  GrectX = 194;  
  GrectY = 156;
  OrectX = 308;
  OrectY = 158;
  TrectX = 410;
  TrectY = 155;
  ArectX = 532;
  ArectY = 162;
  MrectX = 238;
  MrectY = 318;
  NrectX = 505;
  NrectY = 313;
  UrectX = 222;
  UrectY = 502;
  Trect2X = 385;
  Trect2Y = 502;
  ErectX = 520;
  ErectY = 496;
  
  
  
  printLetterT1 = false;
  printLetterI = false;
  printLetterM = false;
  printLetterE = false;
  printLetterO = false;
  printLetterU = false;
  printLetterT2 = false;
  
  haswon = false;

  //hint 
hint = createA('https://www.dropbox.com/s/lunlwqigv57gxmf/youth%20%28demo%29.wav?dl=0', 'music');
hint.position(650, 356);
hint.style('font-family', ["Lucida Console", "Courier New", 'monospace']);
  
  
  
  
  print("welcome to the chronophobia project...come on in have fun")
  print("click around to play with the samples")
  print("")
  print("a hint: all of the loops are 4 bars")
}
  function draw(){
    
     if (!gamestart) {
    background(255);

    textSize(32);
    textFont(myFont);
    fill(50);
    text('welcome to the chronophobia project.', 10, 310);
       
      text('come in, play around, waste some time with us.', 10, 370);

       text('use the music...see what you find.', 10, 430);
  } 

    else{
    background(img);
    fill(0,0,0);  
   /* rect(GrectX, GrectY, rectSizeTop, rectSizeTop);
    rect(OrectX, OrectY, rectSizeTop, rectSizeTop);
    rect(TrectX, TrectY, rectSizeTop, rectSizeTop);
    rect(ArectX, ArectY, rectSizeTop, rectSizeTop);
    rect(MrectX, MrectY, 180, 165);
    rect(NrectX, NrectY, rectSizeMid, 165);
    rect(UrectX, UrectY, 150, 165);
    rect(Trect2X, Trect2Y, rectSizeBot, 180);
    rect(ErectX, ErectY, rectSizeBot, 180);*/
    
    
// mouse coordinates, used for height & width parameters
  /*noStroke();
  fill(255,0,0);
  ellipse(mouseX,mouseY,40,40);
  fill(0);
  text(mouseX+"//"+mouseY,mouseX,mouseY);*/
    
    if (printLetterT1) {
    push();
        fill(255);
        textSize(69);
        text('T', 38, 154);
        pop();
      }
    
     if (printLetterI) {
    push();
        fill(255);
        textSize(69);
        text('I', 43, 200);
        pop();
      }
    
     if (printLetterM) {
    push();
        fill(255);
        textSize(69);
        text('M', 38, 246);
        pop();
      }
    
     if (printLetterE) {
    push();
        fill(255);
        textSize(69);
        text('E', 38, 289);
        pop();
      }
    
     if (printLetterO) {
    push();
        fill(255);
        textSize(69);
        text('O', 38, 327);
        pop();
      }
    
     if (printLetterU) {
    push();
        fill(255);
        textSize(69);
        text('U', 38, 378);
        pop();
      }
    
     if (printLetterT2) {
    push();
        fill(255);
        textSize(69);
        text('T', 38, 430);
        pop();
      }
    
     
    if(haswon){
      fill(255);
      textSize(69);
      text('T', 38, 154);
      text('I', 43, 200);
      text('M', 38, 246);
      text('E', 38, 289);
      text('O', 38, 327);
      text('U', 38, 378);
      text('T', 38, 430);
      
      
    
    }
      
    if(drawwin){
      push();
      textSize(32);
      fill(255);
      text("wow you figured it out..lucky duck", 300,692 );
    }
      
      if(wrong){
        
        push();
      textSize(32);
      fill(255);
      text("having fun?", 250, 692);
        
      }
  
  }
  }



function mouseReleased() {
  
  
  
  if(!gamestart){
  
  gamestart = true}

  else{
      if(mouseX > GrectX - rectSizeTop/2 && mouseX < GrectX + rectSizeTop/2 && mouseY > GrectY - rectSizeTop/2 && mouseY < GrectY + rectSizeTop/2  ){
     
    BabybuttonCounter++;
      
      baby.play(); 
          
      }
  
  
  
  if(mouseX > OrectX - rectSizeTop/2 && mouseX < OrectX + rectSizeTop/2 && mouseY > OrectY - rectSizeTop/2 && mouseY < OrectY + rectSizeTop/2  ){
       
    
    ShimmerbuttonCounter++;
      
       chimes.play(); 
    
    if(clockcheck == 1 && melodycheck == 2 && horncheck == 3 && drumscheck == 4){
    set(shimmercheck = 5);
    print ("O");
    
    printLetterO = true;
        setTimeout(() => {
          printLetterO = false;
        }, 1000);}
  
    
    else{
    set(shimmercheck = 783);
    //  print (shimmercheck);
        
      }}
  
  if(mouseX > TrectX - rectSizeTop/2 && mouseX < TrectX + rectSizeTop/2 && mouseY > TrectY - rectSizeTop/2 && mouseY < TrectY + rectSizeTop/2 ){
       
    
      ClockbuttonCounter++;
      clock.loop();
    
       
      
      if (ClockbuttonCounter % 2 == 0) {
          print("stop clock")
            if (clock.isPlaying()){
            clock.stop();
           }
        }  
    
      if(melodycheck == 0 && horncheck == 0 && drumscheck == 0 && shimmercheck == 0 && guitarcheck == 0 && riffcheck == 0){
        
        set(clockcheck = 1);
        print("T")
        
        printLetterT1 = true;
        setTimeout(() => {
          printLetterT1 = false;
        }, 1000);
      }
    
    
  }
  
  
  

  
  if(mouseX > ArectX - rectSizeTop/2 && mouseX < ArectX + rectSizeTop/2 && mouseY > ArectY - rectSizeTop/2 && mouseY < ArectY + rectSizeTop/2  ){
       print("block");
       buttonCounter4++;
      
       woodblock.play(); 
       
      }
  
 
if(mouseX > MrectX - 180/2 && mouseX < MrectX + 180/2 && mouseY > MrectY - 165/2 && mouseY < MrectY + 165/2  ){
       
       BHbuttonCounter++;
      
       beehorn.loop(); 
      
        if (BHbuttonCounter % 2 == 0) {
            print("stop beehorn")
            if (beehorn.isPlaying()){
            beehorn.stop();
           }
         }
  
  if(clockcheck == 1 && melodycheck == 2){
    set(horncheck = 3);
    print ("M");
    
    
    printLetterM = true;
        setTimeout(() => {
          printLetterM = false;
        }, 1000);
    
   // if(melody.isPlaying()){
      //  melody.stop();
        
        
    //  }
    }
  else{
    set(horncheck = 407)
  }
      }
  
// i button 
if(mouseX > 360 && mouseX < 400 && mouseY > 224 && mouseY < 400){ 
  
  MelodybuttonCounter++;
      
       melody.loop(); 
      
        if (MelodybuttonCounter % 2 == 0) {
            print("stop track")
            if (melody.isPlaying()){
            melody.stop();
           }
         }
  
  if(clockcheck == 1 && horncheck == 0 && drumscheck == 0 && shimmercheck == 0 && guitarcheck == 0 && riffcheck == 0){
        
        set(melodycheck = 2);
        print("I")
  
  printLetterI = true;
        setTimeout(() => {
          printLetterI = false;
        }, 1000);} 
  
  else {
    set(melodycheck = 404)
   // print(melodycheck)
  }
}

  //check button
if(mouseX > 593 && mouseX < 623 && mouseY > 100 & mouseY < 144){
  
   if(clockcheck == 1 && melodycheck == 2 && horncheck == 3 && drumscheck == 4 && shimmercheck == 5 && guitarcheck == 6 && riffcheck == 7){
      
      drawwin = true;
      melody.stop();
      drums.stop();
      guitar.stop();
      riff.stop();
      beehorn.loop();
      clock.loop();
      baby.loop();
     
    haswon = true;
      
    }
  
  else {
      wrong = true;
      print("having fun?")
      vibslap.play();
    
    set(clockcheck = 0);
    set(melodycheck = 0);
    set(horncheck = 0);
    set(drumscheck = 0); 
    set(shimmercheck = 0);
    set(guitarcheck = 0);
    set(riffcheck = 0);
    
    if (violin.isPlaying()){
            violin.stop();
           }
    if (clock.isPlaying()){
            clock.stop();
           }
    if (melody.isPlaying()){
            melody.stop();
           }
    
    if (beehorn.isPlaying()){
            beehorn.stop();
           }
    
    if (guitar.isPlaying()){
            guitar.stop();
           }
    
    if (drums.isPlaying()){
            drums.stop();
           }
    
    if (riff.isPlaying()){
            riff.stop();
           }
      
  }

  
  
  
  
  
 
  
  
  

}
  if(mouseX > NrectX - 150/2 && mouseX < NrectX + 150/2 && mouseY > NrectY - 165/2 && mouseY < NrectY + 165/2  ){
       print("violin");
       ViolinbuttonCounter++;
      
       violin.loop(); 

  set(clockcheck = 0);
  set(melodycheck = 0);
  set(horncheck = 0);
  set(drumscheck = 0); 
  set(shimmercheck = 0);
  set(guitarcheck = 0);
  set(riffcheck = 0);
    
        if (ViolinbuttonCounter % 2 == 0) {
            print("stop track")
            if (violin.isPlaying()){
            violin.stop();
           }
         }   
      }
  
  if(mouseX > UrectX - 150/2 && mouseX < UrectX + 150/2 && mouseY > UrectY - 165/2 && mouseY < UrectY + 165/2  ){
       
        GuitarbuttonCounter++;
      
       guitar.loop(); 
      
        if (GuitarbuttonCounter % 2 == 0) {
            print("stop guitar")
            if (guitar.isPlaying()){
            guitar.stop();
           }
         } 
      
    if(clockcheck == 1 && melodycheck == 2 && horncheck == 3 && drumscheck == 4 && shimmercheck == 5){
    set(guitarcheck = 6);
    print ("U");
    
    printLetterU = true;
        setTimeout(() => {
          printLetterU = false;
        }, 1000);}
    
    else{
    set(guitarcheck = 919);
     // print (guitarcheck);
        
      }}
        
      

  //Riff Button
  if(mouseX > Trect2X - 124/2 && mouseX < Trect2X + 124/2 && mouseY > Trect2Y - 180/2 && mouseY < Trect2Y + 180/2  ){
       
    
     RiffbuttonCounter++;
      
       riff.loop(); 
      
        if (RiffbuttonCounter % 2 == 0) {
            print("stop riff")
            if (riff.isPlaying()){
            riff.stop();
           }
         }  
    
    if(clockcheck == 1 && melodycheck == 2 && horncheck == 3 && drumscheck == 4 && shimmercheck == 5 && guitarcheck == 6){
    set(riffcheck = 7);
    print ("T");
    
    if(guitar.isPlaying()){
        guitar.stop();}
      if(beehorn.isPlaying()){
        beehorn.stop();
      
      printLetterT2 = true;
        setTimeout(() => {
          printLetterT2 = false;
        }, 1000);}
    
    else{
      set(riffcheck = 101);
     // print (riffcheck);
    
       
      }}}
 
  
  //Drums button
  if(mouseX > ErectX - 124/2 && mouseX < ErectX + 124/2 && mouseY > ErectY - 180/2 && mouseY < ErectY + 180/2  ){
       
    
    DrumsbuttonCounter++;
      
       drums.loop(); 
      
        if (DrumsbuttonCounter % 2 == 0) {
            print("stop drum")
            if (drums.isPlaying()){
            drums.stop();
           }
         } 
    
    if(clockcheck == 1 && melodycheck == 2 && horncheck == 3){
    set(drumscheck = 4);
    print ("E");
    
    printLetterE = true;
        setTimeout(() => {
          printLetterE = false;
        }, 1000);}
    
    else{
     set(drumscheck = 808);
     // print (drumscheck);
    }
  }
}}
    
    
     /*  EndbuttonCounter8++;
      
       melody.stop(); 
       clock.stop();
       drums.stop();
       riff.stop();
       violin.stop();
       chimes.stop();*/
    
    /*
    DANNY:
      It seemed to complain if I tried to stop tracks that were already stopped, so I just    added some checks to see whether the songs was playing, before stopping it:
      
      **
      if (melody.isPlaying())
        melody.stop();

      if (clock.isPlaying())
        clock.stop();

      if (drums.isPlaying())
        drums.stop();

      if (riff.isPlaying())
        riff.stop();

      if (violin.isPlaying())
        violin.stop();

      if (chimes.isPlaying())
        chimes.stop();
      
     
    
      if (clock.isPlaying() && melody.isPlaying() && Drums.isPlaying )  */
   
  




