# UCSC-pig-DOM-game
pig game lesson on DOM

*** GAME RULES ***
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

# Version 1

- Algorithm: Create randomly generated dice number  (done)
- console.log(dice) to check if dice no is generating 1 thru 6 (done)
- DOM: Update current score of player 0 to have dice number (done)
- hide the dice picture (done)
- Switch to player 1 and set player 1 to have dice number as current score

# Version 2
- unhide dice picture
- Set up an event Handler
- Assign an anonymous callback function as a handler

// select RollDice button class
// when clicked console log I'm clicked
// document.querySelector('.btn-roll').addEventListener('click', function() {
//   console.log('I\'m clicked!');
// })

- pass in myHandler function as a handler (done)
- log out dice number when clicked in handler
simply moved dice = Math.floor(Math.random() * 6) + 1; inside of handler
- Set the player 1,2 current score to 0
set dice = 0
document.querySelector('#current-' + activePlayer).textContent = dice;

- Update activePlayer 0 score with new dice roll number when click on Roll Dice
Lesson on: Document.getElementbyID
Hint: event
Move document.querySelector('#current-' + activePlayer).textContent = dice; inside of the eventHandler

# Version 3
-  create css element img src="images/dice-x.png" class ="dice" in JS
How to manipulate the source property of the image
remember that dice is dynamically generated.
  //  create css element img src="images/dice-5.png" class ="dice"
document.querySelector('.dice').src = 'images/dice-' + dice + '.png';

- 