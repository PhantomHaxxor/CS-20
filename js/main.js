// HTML Elements //
var FirstNameInput = document.getElementById("FirstNameInput")
var LastNameInput = document.getElementById("LastNameInput")
//
var Output = document.getElementById("output")
// Button Elements //
var RandomNicknameBtn = document.getElementById("RandomNick")
var AllNicknamesBtn = document.getElementById("AllNick")

// Global Variables //
var NicknamesArray
function get(Data) {
  console.log(Data)
  var textData = Data.text()
  var d = textData.split("\n")
  for (var i = 1; i < d.length; i++) {
    console.log(d[i])
  }
  return 
}

fetch("nicknames.txt").then(get)


// Functions //

RandomNicknameBtn.addEventListener("click", function() {
   console.log("Test")
})

AllNicknamesBtn.addEventListener("click", function() {
   console.log("Test2")
})
