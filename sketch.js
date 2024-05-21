function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stroke("white");
    
    if(mouseIsPressed){
      rect (mouseX, mouseY, 10, 10)
    }
  }