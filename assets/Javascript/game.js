var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var userselected =[];
var numGuesses = 9;


   var directionsText = document.getElementById("directions-text");
   var userChoiceText = document.getElementById("userchoice-text");
   var computerChoiceText = document.getElementById("computerchoice-text");
   var winsText = document.getElementById("wins-text");
   var lossesText = document.getElementById("losses-text");
   var userselectedtext = document.getElementById("userselected-text");
   var numGuessesText = document.getElementById("guessesleft-text");

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


document.onkeyup = function(event) {


   var userGuess = event.key;

   

   if (userGuess === "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z") {

        if (userGuess === computerGuess) {
          wins++;
          alert("You are just lucky");
          numGuesses = 9;
          userselected = [];
          computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(userselected);

    } else if (userselected.indexOf(userGuess) >=0) {
        alert("You already guessed that letter!");
     
     } else if (userGuess !== computerGuess) {
      numGuesses --;
      userselected.push(userGuess);
     } 

     if (numGuesses === 0) {
      alert("Loser!!!!!");
       numGuesses = 9;
       losses++;
       userselected = [];
       computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     }
   }

  


   directionsText.textContent = "";

   
   userChoiceText.textContent = "You chose: " + userGuess;
  //  computerChoiceText.textContent = "The computer chose: " + computerGuess;
   winsText.textContent = "Wins: " + wins;
   lossesText.textContent = "Losses: " + losses;
   userChoiceText.textContent = "User Selected: " + userselected;
   numGuessesText.textContent = "Guesses left: " + numGuesses;
 };