let dice = 0;
let scores = [0,0];
let roundScore = 0;
// 1: active 0: inactive
// let activePlayer = 0;
let activePlayer = 0;


document.querySelector('.btn-roll').addEventListener('click', function() {
  // make the dice img visible
  dice = Math.floor(Math.random() * 6) + 1;
  document.querySelector('.dice').style.display = 'block';
  // render correspoding dice img
  // inspect dice img to get the class name of dice img
  //  create css element img src="images/dice-5.png" class ="dice"
  document.querySelector('.dice').src = 'images/dice-' + dice + '.png';
  if (dice !== 1) {
    // current dice roll no gets displayed on active player
    document.querySelector('#current-' + activePlayer).textContent = dice;
  // dice is 1 then #current-0or1 resets to zero, switch to nextPlayer
  } else {
    document.querySelector('#current-' + activePlayer).textContent = 0;
    // switch activePlayer: toggle > if it is 0 then make it 1
    //                               if it is 1 then manke it 0
    if(activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    
  }




});

  // grab the total score and current score element and reset to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// dice img refresh at page load
document.querySelector('.dice').style.display = 'none';