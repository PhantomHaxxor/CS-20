// Graphics
var cnv = document.getElementById("Canvas")
var ctx = cnv.getContext('2d')
cnv.width = 800
cnv.height = 600

function CreatePlatforms(x, y, GrassColor, DirtColor) {
    fill(DirtColor);
    rect(x, y, 200, 50, "fill")
    fill(GrassColor);
    rect(x, y - 25, 200, 25, "fill")
}

function DrawHouse(x, y, HouseColor) {
    fill(HouseColor);
    rect(x, y, 100, 100, "fill") // House Box
    fill("brown");
    triangle(x + 120, y , x - 20, y , x + 50, y - 75, "fill") // Roof
    fill("brown");
    rect(x + 15, y + 50, 25, 25, "fill") // Window Frame
    rect(x + 50, y + 40, 30, 60, "fill") // Door
    fill("gold");
    circle(x + 55, y + 75, 3, "fill") // Door Knob
    fill("blue");
    rect(x + 17.5, y + 52.5, 20, 20, "fill") // Window Pane
    fill("brown");
    rect(x + 25, y + 50, 5, 25, "fill") // Window Bar
}

// Platform Creation 
window.addEventListener("load", CreatePlatforms(5, 500, "green", "brown"))
window.addEventListener("load", CreatePlatforms(250, 350, "blue", "white"))
window.addEventListener("load", CreatePlatforms(500, 250, "red", "blue"))

// House Creation
window.addEventListener("load", DrawHouse(90, 375, "white"))
window.addEventListener("load", DrawHouse(275, 225, "aqua"))
window.addEventListener("load", DrawHouse(550, 125, "white"))