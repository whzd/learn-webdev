var level = 1;
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var ticker;

$(".btn").on("click", function(event) {
    var selectedColor = event.target.id;
    colorAnimation(selectedColor, true);
    userPattern.push(selectedColor);
    checkAnswer(userPattern.length - 1);
});

$(document).keypress(function(event) {
    if (event.key && level === 1) {
        nextSequence();
    }
});

function checkAnswer(lastPressedIndex) {
    console.log(lastPressedIndex);
    if (userPattern[lastPressedIndex] === gamePattern[lastPressedIndex]) {
        console.log(userPattern[lastPressedIndex]);
        console.log(gamePattern[lastPressedIndex]);
        if (lastPressedIndex === gamePattern.length - 1) {
            ticker = setTimeout(function() {
                nextSequence();
            }, 1000);
            userPattern = [];
        }
    } else {
        gameOver();
        restartGame();
    }
}

function restartGame(){
    level = 1;
    gamePattern = [];
    userPattern = [];
}

function gameOver() {
    clearTimeout(ticker);
    var gameOver = new Audio("./sounds/wrong.mp3");
    gameOver.play();
    $("body").toggleClass("game-over");
    setTimeout(function() {
        $("body").toggleClass("game-over");
    }, 200);
    $("h1").text("GAME OVER! Press Any Key to Restart.");
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
