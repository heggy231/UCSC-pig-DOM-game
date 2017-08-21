let dice = 0;
let scores = [0,0];
let roundScore = 0;
// 1: active 0: inactive
// let activePlayer = 0;
let activePlayer = 0;


document.querySelector('.btn-roll').addEventListener('click', function() {
  // make the dice img visible
  document.querySelector('.dice').style.display = 'block';
  dice = Math.floor(Math.random() * 6) + 1;
  // current dice roll no gets displayed on active player
  document.querySelector('#current-' + activePlayer).textContent = dice;
  // render correspoding dice img
  // inspect dice img to get the class name of dice img
  //  create css element img src="images/dice-5.png" class ="dice"
  document.querySelector('.dice').src = 'images/dice-' + dice + '.png';
});

// grab the total score and current score element and reset to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// dice img refresh at page load
document.querySelector('.dice').style.display = 'none';