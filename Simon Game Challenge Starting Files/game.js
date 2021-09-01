$("document").ready(function() {

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
    if(!started) {
        console.log(started);
        //The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})


$(".btn").click(function () {
    //grab the clicked button's id valueb 'on click'
    var userChosenColor = $(this).attr("id");
    console.log("clicked button: " + userChosenColor);
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);

    playSound(userChosenColor);

    animatePress(userChosenColor);
});

function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    //choose a color randomly
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    
    var randomChosenColor = buttonColors[randomNumber];
    console.log(randomChosenColor);

    //Add the new randomChosenColor generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColor);
    //flash efect on chosen card
    $("#" + randomChosenColor).fadeIn(100).fadeOut(400).fadeIn(100);

    //play sound 
    playSound(randomChosenColor);   
}

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            },1000)
        } 
    }

}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    //remove new class after a few seconds
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 500);
}


}); //document.ready function ends