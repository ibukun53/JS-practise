/* eslint-disable indent */
/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
const computerDisplayChoice = document.getElementById('computer-choice');
const userDisplayChoice = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

function generateComputerChoice(){
  const randomNumber = Math.floor(Math.random() * possibleChoice.length) + 1;
    if (randomNumber === 1){
    computerChoice = 'rock';
    }
  if (randomNumber === 2){
  computerChoice = 'scissors';
 }
     if (randomNumber === 3){
    computerChoice = 'paper';
    }
  computerDisplayChoice.innerHTML = computerChoice;
}

function getResult(){
 if (computerChoice === userChoice){
    result = 'It\'s a draw!';
 }
if (computerChoice === 'rock' && userChoice === 'paper'){
    result = 'you win!';
}
if (computerChoice === 'rock' && userChoice === 'scissors'){
    result = 'you lost!';
    }
if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you win!';
    }
if (computerChoice === 'paper' && userChoice === 'rock'){
            result = 'you lose!';
     }
     if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you lose!';
 }
 if (computerChoice === 'scissors' && userChoice === 'paper'){
    result = 'you win!';
}
  resultDisplay.innerHTML = result;
}

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userDisplayChoice.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  }));