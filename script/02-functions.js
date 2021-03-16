window.addEventListener('resize', () => {
    width = window.innerWidth
    height = window.innerHeight
})

const oreils = () => {
    ellipse(center.x + 200, center.y - 100, 50, 100);
    ellipse(center.x - 200, center.y - 100, 50, 100);
}

const visage = () => {
    ellipse(center.x, center.y, 400, 500);
}

const nez = () => {
    ellipse(center.x, center.y, 40, 50);
}

const bouche = () => {
    ellipse(center.x, center.y + 100, 150, 50);
}

const yeux = () => {
    ellipse(center.x + 50, center.y - 100, 75, 50);
    ellipse(center.x - 50, center.y - 100, 75, 50);
}