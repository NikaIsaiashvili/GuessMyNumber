'use strict';

//Defining Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const dispayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const bodyBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const scoreTextContent = function (score) {
  document.querySelector('.score').textContent = score;
};
const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const numberTextContent = function (number) {
  document.querySelector('.number').textContent = number;
};

// Handling Click Events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (guess <= 0 || guess > 20) {
    dispayMessage('⛔ Enter between 1 and 20!');

    // when player wins
  } else if (guess === secretNumber) {
    numberTextContent(secretNumber);
    dispayMessage('🎉 Correct Number!');
    bodyBackgroundColor('#60b347');
    numberWidth('30rem');
    //best score update
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      dispayMessage(guess > secretNumber ? '📈 too high!' : '📉 too low!');
      score--;
      scoreTextContent(score);
    } else {
      // when player loses
      dispayMessage('💥 You lost the game!');
      numberTextContent(secretNumber);
      bodyBackgroundColor('red');
      scoreTextContent(0);
    }
  }
});

// Resetting the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreTextContent(score);
  dispayMessage('Start guessing...');
  numberTextContent('?');
  numberWidth('15rem');
  document.querySelector('.guess').value = '';
  bodyBackgroundColor('#222');
});
