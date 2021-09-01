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
