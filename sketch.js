function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    if (mouseIsPressed) {
        fill(1);
        ellipse(mouseX, mouseY, 80, 80);
    } 
}