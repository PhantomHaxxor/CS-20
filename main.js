// Graphics
var cnv = document.getElementById("Canvas")
var ctx = cnv.getContext('2d')

cnv.width = 800
cnv.height = 600

function DrawHouse() {
    fill("brown");
    triangle(600, 300, 200, 300, 400, 150, "fill") // Roof
    fill("beige");
    rect(250, 300, 300, 300, "fill") // House Box
    fill("brown");
    rect(275, 400, 100, 100, "fill") // Window Frame
    rect(400, 400, 100, 300, "fill") // Door
    fill("gold");
    circle(425, 500, 10, "fill") // Door Knob
    fill("blue");
    rect(285, 412, 80, 80, "fill") // Window Pane
    fill("brown");
    rect(317.5, 400, 15, 100, "fill") // Window Bar
}

function DrawTerrain() {
    fill("white");
    for (var i = 0; i <= 5; i++) { // Loop for Clouds
        circle(i*150, 20, 100 + (Math.random() * 50), "fill"); // Clouds
    }
    fill("green");
    for (var i = 0; i <= 5; i++) { // Loop for Grass
        circle(i*150, 610 + (Math.random() * 50), 100, "fill"); // Grass
    }
}

window.addEventListener("load", DrawHouse)
window.addEventListener("load", DrawTerrain)