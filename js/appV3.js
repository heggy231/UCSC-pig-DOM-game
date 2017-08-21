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

document.querySelector('.btn-roll').addEventListener('click', function() {
  dice = Math.floor(Math.random() * 6) + 1;
  // current dice roll no gets displayed on active player
  document.querySelector('#current-' + activePlayer).textContent = dice;
  // render correspoding dice img
  // inspect dice img to get the class name of dice img
  //  create css element img src="images/dice-5.png" class ="dice"
  document.querySelector('.dice').src = 'images/dice-' + dice + '.png';
})

// grab the total score of activePlayer = 0 and reset to 0
document.getElementById('score-0').textContent = '0';