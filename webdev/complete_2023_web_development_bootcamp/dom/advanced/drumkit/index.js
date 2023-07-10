let buttons = document.querySelectorAll(".drum");
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function(){
        alert("I got clicked!");
    });
}
