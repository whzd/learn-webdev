# JavaScript Functions Part1

## Challenge - The Karel Robot

In the [Stanford Karel website](https://stanford.edu/~cpiech/karel/ide.html) create a chess patern on a 5x5 board.

### Solution only using turnLeft()

function main(){
   goLineOne();
   goLineTwo();
   goLineOne();
   goLineTwo();
   goLineOne();
   
}
function goLineOne(){
   putBeeper();
   moveMovePut();
   moveMovePut();
}
function goLineTwo(){
   oddTurnMovePut();
   moveMovePut();
   endEvenLine();
}

function moveMovePut(){
   move();
   move();
   putBeeper();
}
function oddTurnMovePut(){
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
}
function endEvenLine(){
   move();
   turnThree();
   move();
   turnThree();
}

function turnThree(){
   turnLeft();
   turnLeft();
   turnLeft();
}
