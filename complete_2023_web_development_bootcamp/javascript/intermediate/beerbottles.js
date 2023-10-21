function beerbottles() {
    let bottles = 99;
    while (bottles > 1) {
        console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.");
        bottles -= 1;
        if (bottles === 1) {
            console.log("Take one down and pass it arround, " + bottles + " bottle of beer on the wall.");
        } else {
            console.log("Take one down and pass it arround, " + bottles + " bottles of beer on the wall.");
        }
        console.log();
    }
    console.log(bottles + " bottle of beer on the wall, " + bottles + " bottle of beer.");
    bottles -= 1;
    console.log("Take one down and pass it arround, no more bottles of beer on the wall.");
    console.log();
    console.log("No more bootles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bootles of beer on the wall");
}

beerbottles();
