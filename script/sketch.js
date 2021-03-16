// function setup() {
//     colorMode(RGB, 255);
//     createCanvas(width, height);
// }

// function draw() {
//     background(220);
//     colorMode(RGB, 255, 255, 255, 1);
//     // perso()

// }

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1)
}

function draw() {
    colorMode(RGB, 100);
    background(10);
    for (let i = 0; i < 30; i++) {
        let step = windowWidth / 30
        push();
        stroke(int(random(100)), int(random(100)), int(random(100)));
        line(step * i, 0, step * i, windowWidth);
        pop();
    }
    for (let i = 0; i < 20; i++) {
        let step = windowHeight / 20
        push();
        stroke(int(random(100)), int(random(100)), int(random(100)));
        line(0, step * i, windowWidth, step * i);
        pop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}