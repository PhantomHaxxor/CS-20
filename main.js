// Variables
var Input_Y2 = document.getElementById("Input_Y2")
var Input_Y1 = document.getElementById("Input_Y1")
var Input_X2 = document.getElementById("Input_X2")
var Input_X1 = document.getElementById("Input_X1")
var Output = document.getElementById("output")
var Btn = document.getElementById("calculateBtn")

function CalculateSlope(y2, y1, x2, x1) {
    console.log((y2- y1), (x2 - x1))
    return (y2- y1) / (x2 - x1)
}

Btn.addEventListener("click", function() {
    // Get Inputs //
    var Y2Val = Input_Y2.value
    var Y1Val = Input_Y1.value
    var X2Val = Input_X2.value
    var X1Val = Input_X1.value

    // Get Slope From Inputs //
    var Slope = CalculateSlope(Y2Val, Y1Val, X2Val, X1Val)
    var RoundedSlope = "(" + Math.round(Slope) +")"

    // Display Slope In Output //
    Output.innerHTML = Slope + " " + RoundedSlope
})
