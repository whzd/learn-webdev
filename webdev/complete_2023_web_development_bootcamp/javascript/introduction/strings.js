const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("What is you name?\n", text => {
    // strings capitalization 
    console.log("Hello " + text.slice(0,1).toUpperCase() + text.slice(1,text.length).toLowerCase())
    readline.close();
});

//readline.question('What is your message?\n', text => {
//    // strings slice
//    console.log("Your message:\n" + text.slice(0,140))
//    // strings length
//    console.log('You have written ' + text.length + 'characters, your limit is 140 characters.');
//    readline.close();
//});
