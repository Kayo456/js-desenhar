function setup() {
    createCanvas(500, 500);
    background('gray');
  }
  
  function draw() {
    stroke('red');
    fill('blue');
    
    // cosnole.log(mouseIsPressed);
    if (mouseIsPressed)
    rect(mouseX,mouseY,10,20);
    
    
  }