'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let higherScore = 0;
document.querySelector('.number').textContent = secretNumber;

const changeText = (element, text) => {
  document.querySelector(element).textContent = text;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  !guess
    ? changeText('.message', '🚫 No Number!')
    : guess === secretNumber
    ? (changeText('.message', '👏🏻 Correct Number!'),
      (document.querySelector('body').style.backgroundColor = '#60b347'),
      (document.querySelector('.number').style.width = '30rem'),
      changeText('.number', secretNumber),
      score > higherScore
        ? ((higherScore = score), changeText('.highscore', higherScore))
        : null)
    : guess !== secretNumber
    ? score > 1
      ? (changeText(
          '.message',
          guess > secretNumber ? 'Too High bruh!' : 'Too Low bruh!'
        ),
        score--,
        changeText('.score', score))
      : (changeText('score', 0), changeText('.message', 'You lost the game:('))
    : null;
});

document.querySelector('.again').addEventListener('click', () => {
  const number = document.querySelector('.number');
  const body = document.querySelector('body');
  const guess = document.querySelector('.guess');

  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  changeText('.score', score);
  guess.value = '';
  number.textContent = secretNumber;
  number.style.width = '15rem';
  body.style.backgroundColor = '#222';
  changeText('.message', 'Start guessing...');
});
