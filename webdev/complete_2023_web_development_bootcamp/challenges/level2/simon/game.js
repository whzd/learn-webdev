var level = 1;
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];

$(".btn").on("click", function(event) {
    var selectedColor = event.target.id;
    colorAnimation(selectedColor, true);
    userPattern.push(selectedColor);
    checkAnswer(userPattern.length - 1);
});

$(document).keypress(function(event) {
    if (event.key === "a") {
        nextSequence();
    }
});

function checkAnswer(lastPressedIndex) {
    console.log(lastPressedIndex);
    if (userPattern[lastPressedIndex] === gamePattern[lastPressedIndex]) {
        console.log(userPattern[lastPressedIndex]);
        console.log(gamePattern[lastPressedIndex]);
        if (lastPressedIndex === gamePattern.length -1){
            console.log("going next");
            setTimeout(function(){
                nextSequence();
            }, 1000);
            userPattern = []; 
        }
    } else {
        $("h1").text("GAME OVER!");
    }
}

function nextSequence() {
    $("h1").text("Level " + level);
    var generatedColor = randomColor(buttonColours);
    colorAnimation(generatedColor, false);
    gamePattern.push(generatedColor);
    level += 1;
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * 4)];
}


function colorAnimation(color, pressed) {
    switch (color) {
        case "yellow":
            var yellow = new Audio("./sounds/yellow.mp3");
            yellow.play();
            if (pressed) {
                $("#yellow").toggleClass("pressed");
                setTimeout(function() {
                    $("#yellow").toggleClass("pressed");
                }, 100);
            } else {
                $("#yellow").fadeOut(100).fadeIn(100);
            }
            break;
        case "blue":
            var blue = new Audio("./sounds/blue.mp3");
            blue.play();
            if (pressed) {
                $("#blue").toggleClass("pressed");
                setTimeout(function() {
                    $("#blue").toggleClass("pressed");
                }, 100);
            } else {
                $("#blue").fadeOut(100).fadeIn(100);
            }
            break;
        case "red":
            var red = new Audio("./sounds/red.mp3");
            red.play();
            if (pressed) {
                $("#red").toggleClass("pressed");
                setTimeout(function() {
                    $("#red").toggleClass("pressed");
                }, 100);
            } else {
                $("#red").fadeOut(100).fadeIn(100);
            }
            break;
        case "green":
            var green = new Audio("./sounds/green.mp3");
            green.play();
            if (pressed) {
                $("#green").toggleClass("pressed");
                setTimeout(function() {
                    $("#green").toggleClass("pressed");
                }, 100);
            } else {
                $("#green").fadeOut(100).fadeIn(100);
            }
            break;
        default:
            console.log(color);
            break;
    }
}
