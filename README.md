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
- document.getElementbyID
- How to maniputlate the source property of the image