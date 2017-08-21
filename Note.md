# create random number from 1 through 6

We use Math.floor (not Math.ceil) since dice 1 - 6.

Math.ceil (round up) do not work since if Math.random() outputs number = 0 then Math.ceil will output 0.
Since ceiling of 0 is 0.  Therefore, it is very rare that we get 0 randomly which makes getting
- ceiling is 1, but only if x > 0.  ceiling is 0, if x = 0
try)
x = Math.random * n
// output: [0, 1) from 0 (inclusive) up to but not including 1 (exclusive) 

Math.ceil(Math.random() * 2) 
// output: 1 (only when 0 very rare), 2,3  almost always 2,3 are generated instead 

For Math.floor, 0, ..., 0.99999, the floor of which is 0 (round down).

Math.floor(Math.random() * 2)
// output: 0,1  (this is better method since )

To get number in between 1 to 6
// Math.random() * 6 => [0, 6) 
// Math.floor(Math.random() * 6) => [1,2,3,4,5,6]
Math.floor(Math.random() * 6 ) + 1
// output: 1 through 6

Resource on Math.floor() or Math.ceil()
https://www.codecademy.com/en/forum_questions/555fd11c9113cbf0910006e3


# Version 3: 
- Play inside of console to display right dice images
document.querySelector('.dice').src = 'images/dice-4.png';

//  create css element img src="images/dice-5.png" class ="dice"
document.querySelector('.dice').src = 'images/dice-' + dice + '.png';

- Grab total score, current scores elements reset them to 0 when onload
// grab the total score of activePlayer = 0 and reset to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-0').textContent = 'heggy'

# Version 4:

- Only if dice is NOT equal to 1; keep adding score inside activePlayer
if(dice !== 1) {
  scores[activePlayer] += dice;
  // update UI for scores in player 1 total score
  document.querySelector('#current-' + activePlayer).textContent = dice;

} else {
  
}

move this logic inside event handler

- toggle activePlayers from 0 > 1 or 1 > 0 using if/else:
adding active player functionality use toggle 
if activePlayer = 1 > make it 0
if activePlayer = 0 > make it 1

    if(activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }

- refactor if/else to ternary operator
    // switch activePlayer: toggle > if it is 0 then make it 1
    //                               if it is 1 then manke it 0
    // if(activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }

    // ternary operator convert
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 

- Understanding .classList
// to view all the class applied to '.player-0-panel' class
document.querySelector('.player-0-panel').classList
// output:  ["player-0-panel", "active", value: "player-0-panel active"]
//           class: "player-0-panel" and class: "active"

- learn to remove/add css class using .classList.add or .classList.remove
// to view all the class applied to '.player-0-panel' class
document.querySelector('.player-0-panel').classList
// output: ["player-0-panel", "active", value: "player-0-panel active"]

// try adding active class to .player-1-panel
// first, lets see what classes are applied to .player-1-panel class
document.querySelector('.player-1-panel').classList
// output: ["player-1-panel", value: "player-1-panel"]
// lastly, add 'active' class
document.querySelector('.player-1-panel').classList.add('active');

// remove the active from '.player-0-panel'
document.querySelector('.player-0-panel').classList.remove('active');
