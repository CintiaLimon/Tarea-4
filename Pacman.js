var x = (200, 200)
var y = (200, 200)
var a = x - 200;
var b = y - 200;
var restox
var restoy

function setup() {
  createCanvas(400, 400);
  angulo = PI/4
 }

function draw(){
  background(255);
  pacman()

//X/Y 
  if(keyCode == 39){
    x = x + 1
  } else if (keyCode == 37){
    x = x - 1
  } else if (keyCode == 40){
    y = y + 1
  } else if (keyCode == 38){
    y = y - 1
  }

  if (x > 400){
    x = 0;
  }
  if (x < 0){
    x = 400
  }
  if (y > 400){
    y = 0;
  }
  if (y < 0){
    y = 400
  }
}


function pacman(){
  translate(x, y);    
  if (keyCode == 37){
  rotate(PI)  
  } else if (keyCode == 38){
  rotate(PI*2-(PI/2)) 
  } else if (keyCode == 40){
  rotate(PI/2)  
  } 
  fill(255,255,0);
  arc(0,0, 70, 70, PI/5, 2*PI - (PI/5)) 
  
  
    boca()
}

function boca(){;      
          
  restox = x % 7
  if (restox == 0){
    if (keyCode == 37){
      arc(a,b, 70, 70, PI/25, 2*PI - (PI/25)) 
    } else if (keyCode == 39){
      arc(a,b, 70, 70, PI/25, 2*PI - (PI/25))
    }
  }
    
  restoy = y % 7  
  if (restoy == 0) {
    if (keyCode == 38){
      arc(a,b, 70, 70, PI/25, 2*PI - (PI/25))
    } else if (keyCode == 40){
       arc(a,b, 70, 70, PI/25, 2*PI - (PI/25))
    }
  }

}
