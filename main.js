// Elements //
var Canvas = document.getElementById("Canvas")
var CanvasContext = Canvas.getContext("2d")

// Variables //
var MaxSnowflakes = 100

var width = window.innerWidth
var height = window.innerHeight

Canvas.width = width
Canvas.height = height

var Snowflakes = []

// Functions //

function DrawCircle(X, Y, Radius, Opacity){
    CanvasContext.beginPath()
    CanvasContext.globalAlpha = Opacity
    CanvasContext.arc(X, Y, Radius, 0, 2 * Math.PI)
    CanvasContext.fillStyle = "white"
    CanvasContext.fill()
}

function Random(min, max) {
   return min + Math.random() * (max - min + 1)
}

function WindowResize() {
    width = Canvas.width = window.innerWidth
    height = Canvas.height = window.innerHeight
}

function InitSnowflakes() {
    for (var i = 0; i < MaxSnowflakes; i++) {
        Snowflakes.push({
            X: Math.random() * width,
            Y: Math.random() * height,
            Opacity: Math.random(),
            Speed_X: Random(1, 5),
            Speed_Y: Random(2, 10),
            Radius: Random(0.5, 5)
        })
    }
}

function CreateSnowflakes() {
    for (var i = 0; i < Snowflakes.length; i++) {
        var Information = Snowflakes[i]
        // Draw Circles to Display Snowflakes //
        DrawCircle(Information.X, Information.Y, Information.Radius, Information.Opacity)
    } 
}

function MoveSnowflakes() {
    for (var i = 0; i < Snowflakes.length; i++) {
        var Information = Snowflakes[i]
 
        Information.X += Information.Speed_X 
        Information.Y += Information.Speed_Y
 
        if (Information.X > height) {
             Information.X = Math.random() * width
             Information.Y = -50 
        }
     }
}

function UpdateSnowflakes() {
    CanvasContext.clearRect(0,0, width, height)
    CreateSnowflakes()
    MoveSnowflakes()
}

// Initialize //

window.addEventListener("resize", WindowResize)
setInterval(UpdateSnowflakes, 50)
InitSnowflakes() 