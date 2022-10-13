var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

var level = 0;
var started = false;

function nextSequence(){
    userClickedPattern =[];
    level++;
    $("#" + "level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
}

$(".btn").click(function(evt){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    //console.log(evt.target.id);

    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100); 
}

$(document).keypress(function(evt){
    if(!started){
        nextSequence();
        $("#" + "level-title").text("Level " + level);
        started = true;
    }
});

function checkAnswer(x){
    if(gamePattern[x] === userClickedPattern[x]){
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
            $("h1").text("Game Over, Press Any Key to Restart");
            started = false;
            level = 0;
            gamePattern = [];
        },200);
    }


}