// Library to change context aesthetics

function stroke(color) {
    ctx.strokeStyle = color;
}

function fill(color) {
    ctx.fillStyle = color;
}

function lineWidth(width) {
    ctx.lineWidth = width;
}

function font(font) {
    ctx.font = font
}

// Library to create shapes with modes

function rect(x, y, w, h, mode) {
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h)
    } else if (mode === "stroke") {
        ctx.strokeRect(x, y, w, h)
    }
}

function line(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1,y2)
    ctx.lineTo(x2, y2)
    ctx.stroke()    
}

function circle(x, y, r, mode){
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    if (mode === "fill") {
        ctx.fill()
    } else if (mode === "stroke") {
        ctx.stroke()
    }
}

function triangle(x1, y1, x2, y2, x3, y3, mode) {
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2, y2)
    ctx.lineTo(x3, y3)
    if (mode === "fill") {
        ctx.fill()
    } else if (mode === "stroke") {
        ctx.closePath()
        ctx.stroke()
    }
}

function text(message, x, y, mode) {
    if (mode === "fill") {
        ctx.fillText(message, x ,y)
    } else if (mode === "stroke") {
        ctx.strokeText(message, x, y)
    }
}