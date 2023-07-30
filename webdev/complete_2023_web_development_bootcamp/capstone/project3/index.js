import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function getCurrentDate() {
    var fullDate = new Date().toLocaleString("en-US", options).split(",");
    var monthAndDay = fullDate[1].split(" ");
    return{
        dow: fullDate[0],
        day: monthAndDay[2],
        month: monthAndDay[1],
        year: fullDate[2]
    }
}

app.get("/", (req, res) => {
    res.render("index.ejs", getCurrentDate());
});

app.get("/work", (req, res) => {
    res.render("work.ejs");
});

app.post("/submit", (req, res) => {
    var data = {
        date: getCurrentDate(),
        tasks: tasks
    }
    res.render("index.ejs", data);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

var tasks = [];

