
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var userSelected = [];
var wins = 0;
var losses = 0;



var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var tiesText = document.getElementById("ties-text");


document.onkeyup = function(event) {


  var userGuess = event.key;


  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



  if (userGuess === "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z") {

    if (userGuess === computerGuess) {
      wins++;
    } else if (userGuess !== computerGuess) {
      losses++;
    }; 

    for (var i = 1; i < 4; i++) {

 userSelected.push(userGuess);
    }
    
    directionsText.textContent = "";

   
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    userSelectedText.textContent = "Your guessed so far " + userSelected;
  }
};