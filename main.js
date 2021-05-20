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

fetch("nicknames.txt").then(function(Data){
  return Data.text();
}).then(function(textData){
  NicknamesArray =  textData.split(/\r?\n/)
  start()
})

// Functions /

function Random(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function start() {
  // Assign Button Events //

  function GetInputValues() {
    return [FirstNameInput.value,LastNameInput.value]
  }
  
  function ReturnName(FirstName, randomTxt, LastName) {
    return FirstName + " " + randomTxt + " " + LastName
  }

  RandomNicknameBtn.addEventListener("click", function() {
    var Inputs = GetInputValues()
    var FirstName = Inputs[0]
    var LastName = Inputs[1]

    if (FirstName == "" || LastName == "") {
      alert("Type in FirstName or LastName")
      return
    }

    var randomTxt = NicknamesArray[Random(0,NicknamesArray.length)]

    Output.innerText = ReturnName(FirstName, randomTxt, LastName)
  })

  AllNicknamesBtn.addEventListener("click", function() {
    var Inputs = GetInputValues()
    var FirstName = Inputs[0]
    var LastName = Inputs[1]

    if (FirstName == "" || LastName == "") {
      alert("Type in FirstName or LastName")
      return
    }

    var NicknameString = ""
    for (i = 0; i < NicknamesArray.length; i++) {
      var Nickname = NicknamesArray[i]
      NicknameString += `<div>${ReturnName(FirstName, Nickname, LastName)}</div>`
    }
    Output.innerHTML = NicknameString
  })

}


