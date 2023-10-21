/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            name: "question",
            message: "What site do you want to generate a qr code to ?",
            type: "input"
        }
    ])
    .then((answers) => {
        var qr_png = qr.image(answers["question"], { type: "png" });
        qr_png.pipe(fs.createWriteStream("generated_qr.png"));
        fs.writeFile("URL.txt", answers["question"], err => {
            if (err) {
                console.log(err);
            }
        });
    }).catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error);
        } else {
            // Something else went wrong
            console.log(error);
        }
    });
