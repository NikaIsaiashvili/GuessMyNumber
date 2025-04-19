'use strict';

//Defining Secret Number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber, typeof secretNumber);

let score = 20;

// Handling Click Events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('main').style.backgroundColor = 'green';

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 too high!';
      // decrement score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // when player loses
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('main').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 too low!';
      // decrement score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // when player loses
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('main').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }
});
