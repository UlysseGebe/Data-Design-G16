window.addEventListener('resize', () => {
    width = window.innerWidth
    height = window.innerHeight
})

const oreils = () => {
    fill(249, 228, 183)
    stroke(0,0,0)
    ellipse(center.x + 200, center.y - 100, 50, 100);
    ellipse(center.x - 200, center.y - 100, 50, 100);
}

const visage = () => {
    fill(249, 228, 183)
    stroke(0,0,0)
    ellipse(center.x, center.y, 400, 500);
}

const nez = () => {
    fill(200, 173, 127)
    noStroke()
    ellipse(center.x, center.y, 40, 50);
}

const bouche = () => {
    fill(220, 55, 83)
    noStroke()
    ellipse(center.x, center.y + 100, 150, 50);
}

const yeux = () => {
    fill(255, 255, 255)
    stroke(0,0,0)
    ellipse(center.x + 50, center.y - 100, 75, 50);
    ellipse(center.x - 50, center.y - 100, 75, 50);

    fill(0,0,0)
    noStroke()
    ellipse(center.x + 50, center.y - 100, 30, 30);
    ellipse(center.x - 50, center.y - 100, 30, 30);
}