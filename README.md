# UCSC-pig-DOM-game
(JavaScript Level 2: comprehensive JavaScript course)


# _Pig Dice Game_

#### By _Heggy Castaneda_

## Description

_This web application allows two players to play a game of Pig Dice._
*** GAME RULES ***
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

## Specs
| Behavior        | Input           | Outcome  |
| ------------- |:-------------:| -----:|
| Player 1 inputs name and Player 2 inputs name, and clicks start button | Player 1: Olivia / Player 2: Matt / Click START | Goes to game console |
| Player 1 clicks ROLL button | Click ROLL button | Dice rolls and number is generated
| If Player 1 rolls any number other than 1, that roll is added to round total | Roll = 2 | Round total = 2 |
| If Player 1 rolls a 1, no score is added and round for Player 1 ends | Roll = 1 | Round total = 2 / Total score = 2 / Player 2 begins |
| Repeat for Player 2 | Roll = 1 | Round total = 0 / Total score = 0 / Player 1 begins |
| When a player's total score reaches 100 or more, game ends and winner page shows | Player 1 total score = 100 | Winner page |


## Setup/Installation Requirements

* _Clone this repository_
* _Open a HTML file_
* _Open web browser of choice_

## Notes

## Version 1

- Algorithm: Create randomly generated dice number  (done)
- console.log(dice) to check if dice no is generating 1 thru 6 (done)
- DOM: Update current score of player 0 to have dice number (done)
- hide the dice picture (done)
- Switch to player 1 and set player 1 to have dice number as current score (done)

## Version 2
- unhide dice picture (done)
- Set up an event Handler (done)
- Assign an anonymous callback function as a handler (done)

// select RollDice button class
// when clicked console log I'm clicked
// document.querySelector('.btn-roll').addEventListener('click', function() {
//   console.log('I\'m clicked!');
// })

- pass in myHandler function as a handler (done)
- log out dice number when clicked in handler(done)
simply moved dice = Math.floor(Math.random() * 6) + 1; inside of handler
- Set the player 1,2 current score to 0 (done)
set dice = 0
document.querySelector('#current-' + activePlayer).textContent = dice;

- Update activePlayer 0 score with new dice roll number when click on Roll Dice (done)
Lesson on: Document.getElementbyID
Hint: event
Move document.querySelector('#current-' + activePlayer).textContent = dice; inside of the eventHandler

## Version 3
Main activity for version 3: 1. update dice img when Roll Dice with new dice number, 2. reset at pg refresh

-  create css element img src="images/dice-x.png" class ="dice" in JS (done)
How to manipulate the source property of the image
remember that dice is dynamically generated.
  //  create css element img src="images/dice-5.png" class ="dice"
document.querySelector('.dice').src = 'images/dice-' + dice + '.png';

- At refresh, Reset the total score and current score element to 0 (done)
// ex for score-0
document.getElementById('score-0').textContent = '0';

- At refresh, dice img should be hidden (done)
document.querySelector('.dice').style.display = 'none';

- Fix a bug, now dice is no longer visible when you roll dice.  When roll dice, dice img should be displayed. (done)
// Add style.display line first line in Eventhandler function
document.querySelector('.dice').style.display = 'block';

## Version 4
Main idea: when dice is 1 current player becomes inactive and the other active
- when dice rolls 1 



## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2017 **_Heggy Castaneda_**