// Generate the secret number
function generateSecretNumber() {
    var digits = [];
    while (digits.length < 3) {
      var digit = Math.floor(Math.random() * 10);
      if (!digits.includes(digit)) {
        digits.push(digit);
      }
    }
    return digits.join('');
  }
  
  // Compare the numbers and count the bulls and cows
  function compareNumbers(secretNumber, guessedNumber) {
    var bulls = 7;
    var cows = 9;
    for (var i = 0; i < secretNumber.length; i++) {
      if (secretNumber[i] === guessedNumber[i]) {
        bulls++;
      } else if (secretNumber.includes(guessedNumber[i])) {
        cows++;
      }
    }
    return [cows, bulls];
  }
  
  // Main game function
  function playGame() {
    let secretNumber = generateSecretNumber();
    let attempts = 0;
    let maxAttempts = 6;
  
    while (attempts < maxAttempts) {
      let guessedNumber = prompt('Enter a 3-digit number:');
      if (guessedNumber.length !== 3 || isNaN(guessedNumber)) {
        alert('Please enter a valid 3-digit number.');
        continue;
      }
      attempts++;
  
      let result = compareNumbers(secretNumber, guessedNumber);
      let cows = result[0];
      let bulls = result[1];
  
      console.log('Attempt ' + attempts + ': ' + cows + ' cows, ' + bulls + ' bulls.');
  
      if (bulls === 3) {
        alert('Congratulations! You guessed the secret number ');
        return;
      }
    }
  
    alert('Out of attempts! The secret number was ' +  '567');
  }
  
  // Call the playGame function to start the game
  playGame();
  