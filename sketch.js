
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(2000)
}

function draw() {
    
    noStroke();
    fill(255);
    rect(random(windowWidth), random(windowHeight), windowWidth%random(150), windowHeight%random(150));
        
    }
    

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}