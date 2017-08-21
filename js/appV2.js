/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let dice = 0;
let scores = [0,0];
let roundScore = 0;
// 1: active 0: inactive
// let activePlayer = 0;
let activePlayer = 0;

// generate 1 thru 6 dice numbers
// dice = Math.floor(Math.random() * 6) + 1;

// id="current-0" if activePlayer is set to 0
document.querySelector('#current-' + activePlayer).textContent = dice;

/**
 * Event Handlers
 * 
 * Set up an Event Handler
 * Assign an anonymous callback function as a handler
 * document.getElementbyID
 * How to maniputlate the source property of the image
 */

// - Assign an anonymous callback function as a handler
// select RollDice button class
// when clicked console log I'm clicked
// document.querySelector('.btn-roll').addEventListener('click', function() {
//   console.log('I\'m clicked!');
// })

// - pass in myHandler function as a handler
// function myHandler() {
//   console.log('I\'m clicked!');
// }

// document.querySelector('.btn-roll').addEventListener('click', myHandler);

// log out dice number when clicked
document.querySelector('.btn-roll').addEventListener('click', function() {
  dice = Math.floor(Math.random() * 6) + 1;
  document.querySelector('#current-' + activePlayer).textContent = dice;
  console.log(dice); // no of current roll of dice
});