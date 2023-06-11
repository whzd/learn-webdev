const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('What is your message?\n', text => {
    // strings slice
    console.log("Your message:\n" + text.slice(0,140))
    // strings length
    console.log('You have written ' + text.length + 'characters, your limit is 140 characters.');
    readline.close();
});
