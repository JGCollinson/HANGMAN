 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    if (["r", "e", "g","o","l","i","t","h"].includes(userGuess)) {
     else if (userGuess === 'a') 
        wins++;
    }

      // Randomly chooses a choice from the options array. This is the Computer's guess.

      // Alerts the key the user pressed (userGuess).
      console.log("User guess: " + userGuess);

              //https://en.wikipedia.org/wiki/Selene
              //albedo
              //https://en.wikipedia.org/wiki/Lunar_Roving_Vehicle
              //perigee
              //http://www.spudislunarresources.com/moon101/moon_101_intro.pdf
              //https://gizmodo.com/scientists-just-found-the-perfect-spot-to-build-an-unde-1819658831

      if (userGuess === computerGuess) {
        ties++;
      } else if (userGuess === 'a') {
        wins++;
      } else if (userGuess === 'p' && computerGuess === 'r') {
        wins++;
      } else if (userGuess === 's' && computerGuess === 'p') {
        wins++;
      } else {
        losses++;
      }

              

      gameStatus.innerHTML = `
      <p>You chose: ${userGuess}</p>
      <p>Computer chose: ${computerGuess}</p>
      <p>wins: ${wins}</p>
      <p>losses: ${losses}</p>
      <p>ties: ${ties}</p>
      `;}

// We can either overwrite each element of the array to make it lowercase, or we can use the toLowerCase() method.


logArray(drinks) //-> Logs array

      

// If the first character in the current animal is "c" or "o", alert the following message.
if (myFarm[j].charAt(0) === "c" || myFarm[j].charAt(0) === "o") {
        alert("Starts with a c or an o!");
      }
    }

  };
</script>