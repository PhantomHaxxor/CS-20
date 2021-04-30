// Array HTML Elements //
var SpanElements = {
  Cod: document.getElementById("cod-span"),
  Salmon: document.getElementById("salmon-span"),
  Tropical: document.getElementById("tropical-span"),
  Pufferfish: document.getElementById("puffer-span"),
}
var CharacterElements = {
  Steve: document.getElementById("steve-img"),
  Alex: document.getElementById("alex-img"),
  Villager: document.getElementById("villager-img"),
}
// HTML Elements //
var fishBtnEl = document.getElementById("fish-btn");
var resultImgEl = document.getElementById("result-img");

// Global Variables
var character = "steve";
var lastCharacter = CharacterElements["Steve"]
var FishAmount = {
  Cod: 0,
  Salmon: 0,
  Tropical: 0,
  Pufferfish: 0,
}

// Functions //
function AddFish(Type, Img) {
  FishAmount[Type]++;
  SpanElements[Type].innerHTML = FishAmount[Type];
  resultImgEl.src = "img/" + Img + ".png";
}

function SimulateCatch(Prob1, Prob2, Prob3) {
  var Random = Math.random();

  if (Random < Prob1) {
    AddFish("Cod", "Raw-Cod")
  } else if (Random < Prob2) {
    AddFish("Salmon", "Raw-Salmon")
  } else if (Random < Prob3) {
    AddFish("Tropical", "Tropical-Fish")
  } else {
    AddFish("Pufferfish", "Pufferfish")
  }
}

function SelectCharacter(Selected) {
  if (lastCharacter !== null) {
    lastCharacter.classList.remove("active")
  }

  var selectedEl = CharacterElements[Selected]
  character = Selected
  lastCharacter = selectedEl
  selectedEl.classList.add("active")
}

// Button Events //
fishBtnEl.addEventListener("click", function(){
  if (character === "Steve") {
    SimulateCatch(0.7, 0.9, 0.95)
  } else if (character === "Alex") {
    SimulateCatch(0.1, 0.2, 0.5)
  } else if (character === "Villager") {
    SimulateCatch(0.25, 0.5, 0.75)
  }
});

CharacterElements.Steve.addEventListener("click", function(){
  SelectCharacter("Steve")
});
CharacterElements.Alex.addEventListener("click", function(){
  SelectCharacter("Alex")
});
CharacterElements.Villager.addEventListener("click", function(){
  SelectCharacter("Villager")
});