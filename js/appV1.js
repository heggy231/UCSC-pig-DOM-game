/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// declare variables

let dice = 0;
let scores = [0,0];
let roundScore = 0;
// 1: active 0: inactive
// let activePlayer = 0;
let activePlayer = 1;

// generate 1 thru 6 dice numbers
dice = Math.floor(Math.random() * 6) + 1;
// console out randomly generated dice numbers 1 thru 6 
console.log(dice);

// id="current-0" if activePlayer is set to 0
document.querySelector('#current-' + activePlayer).textContent = dice;

// hide the dice picture
document.querySelector('.dice').style.display = 'none';

/**
 * Declare Variables
 * How can we generate the random numbers
 * How can we DOM Manipulations..
 * 
 */