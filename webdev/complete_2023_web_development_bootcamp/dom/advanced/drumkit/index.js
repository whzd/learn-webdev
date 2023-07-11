let buttons = document.querySelectorAll(".drum");
var audio = new Audio("./sounds/tom-1.mp3");
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function(){
        audio.play();
        this.style.color = "white";
    });
}
