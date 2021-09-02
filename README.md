# simonGame

Simon Game is a memory game. It will start by flashing one of the four available cards. 
Then, the user is expected to click the selected card. In the same way, a second card will flash, and this time the user is expected to remember the first card and click the FIRST and SECOND cards.
The game continues until the user clicks on the incorrect card. Finally, the user is prompted to restart the game.

## Technologies 
jQuery
HTML
CSS

## Program Design

Diagram ...

### Global variables:
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

### Event Handlers:
document keypress listener
button on click 

### Functions:
checkAnswer()
nextSequence()
animatePress()
playSound()
startOver()
setTimeout()

* Game starts on keypress; first card is randomly chosen, it blinks, and the color name gets pushed into gamePatter empty array.

* user input? On button click, it blinks, and its id value gets pushed into userClickedPattern empty array.

** simultaneously, sound plays, card is animated and we check the answer

* how do we check the answer? we compare gamePatter and userClickedPatter arrays. 
Conditional statement:
If successful: run nextSequence()
If unsuccessful: play 'wrong' sound and add game-over class. Then, remove the class after a few seconds.
Finally, call starOver()





