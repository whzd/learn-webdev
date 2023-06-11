const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('How old is your doge?\n', text => {
    // basic arithmetic
    console.log("Your doge is " + ((text - 2)*4 + 21) + " year old in human years.");
    readline.close();
});

