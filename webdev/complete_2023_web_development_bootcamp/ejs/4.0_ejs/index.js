import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const date = new Date();
    var day = date.getDay();
    if (day === 6 || day === 0) {
        res.render(__dirname + "/views/index.ejs",
            { dow: "the weekend", action: "have fun" }
        );
    } else {
        res.render(__dirname + "/views/index.ejs",
            { dow: "a weekday", action: "work hard" }
        );
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
