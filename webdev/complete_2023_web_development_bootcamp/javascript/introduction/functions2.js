function getMilk(money) {
    const bottlePrice = 1.5;
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + calcBottle(money, bottlePrice) + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    
    return calcChange(money, bottlePrice);
}

function calcBottle(money, costPerBottle) {
    return Math.floor(money / costPerBottle);
}

function calcChange(money, costPerBottle) {
    return money % costPerBottle;
}

let change = getMilk(5);

console.log("The change from buying milk was " + change + " dollars.");
