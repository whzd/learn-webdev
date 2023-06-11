const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('What is your message?\n', text => {
    console.log('You have written ' + text.length + 'characters, you have ' + (140 - text.length) + 'characters left.');
    readline.close();
});
