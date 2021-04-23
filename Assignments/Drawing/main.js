// Graphics
var cnv = document.getElementById("Canvas")
var ctx = cnv.getContext('2d')

cnv.width = 800
cnv.height = 600




function drawKnight(x, y, color) {
    // Draw a Stickman with top-left corner (x, y)
    var Helmet = document.createElement("img")
    Helmet.src = "../../Images/helmet.png"
    fill(color);
    stroke(color);
    drawImage(Helmet, x, y, 50, 50)
    circle(x + 20, y + 20, 20, "fill"); // Head
    line(x + 20, y + 40, x + 20, y + 80); // Body
    line(x, y + 70, x + 20, y + 50); // Left Arm
    line(x + 40, y + 70, x + 20, y + 50); // Right Arm
    line(x, y + 110, x + 20, y + 80); // Left Leg
    line(x + 40, y + 110, x + 20, y + 80); // Right Leg
}

window.addEventListener("load", drawKnight(25,25, "red"))