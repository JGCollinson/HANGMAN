// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
//PRESS ANY KEY TO START
var spacesReset1 = ["_", "_", "_", "_"];
var spaces = ["_", "_", "_", "_"];
var answers1 = ["l", "u", "n", "a"];
var notThese = [];
var numboGuess = 15;
var correctCounter = 0;
var numwins = 0;

function updateSpaces() {
document.getElementById("game").innerHTML = spaces.join(" ");
}
function updateGuessesLeft() {
document.querySelector("#numguesses").innerHTML = numboGuess;
}
function updateLettersGuessed() {	
document.querySelector("#numbertime").innerHTML = notThese.toString();
}
function updateWins() {	
document.querySelector("#wins").innerHTML = "Wins:" + numwins;
}
function updateTrivia() {	
document.querySelector("#picText").innerHTML = "The Roman Goddess of the Moon: Luna is described as having horns and a chariot in continuous chase with Sol (the Sun), \"all-seeing\", \"all-wise\", a lover of horses, vigilance, and a \"foe of strife\" who \"giv\'st to Nature\'s works their destin\'d end\".";
}
