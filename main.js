// Graphics
var cnv = document.getElementById("Canvas")
var ctx = cnv.getContext('2d')

cnv.width = 800
cnv.height = 600

function DrawHouse(x, y) {
    fill("beige");
    rect(x, y, 300, 300, "fill") // House Box
    fill("brown");
    triangle(x + 350, y , x - 50, y , x + 150, y - 150, "fill") // Roof
    fill("brown");
    rect(x + 25, y + 100, 100, 100, "fill") // Window Frame
    rect(x + 150, y + 100, 100, 300, "fill") // Door
    fill("gold");
    circle(x + 175, y + 200, 10, "fill") // Door Knob
    fill("blue");
    rect(x + 35, y + 112, 80, 80, "fill") // Window Pane
    fill("brown");
    rect(x + 70.5, y + 100, 15, 100, "fill") // Window Bar
}

function DrawTerrain(x, y1, y2) {
    fill("white");
    for (var i = 0; i <= 5; i++) { // Loop for Clouds
        circle(i*x, y1, 100 + (Math.random() * 30), "fill"); // Clouds
    }
    fill("green");
    for (var i = 0; i <= 5; i++) { // Loop for Grass
        circle(i*x, y2 + (Math.random() * 30), 100, "fill"); // Grass
    }
}

window.addEventListener("load", DrawHouse(250, 300))
window.addEventListener("load", DrawTerrain(150, 20, 610))