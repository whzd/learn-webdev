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

var dailyTasks = [];
var workTasks = [];

app.get("/", (req, res) => {
    var data = {
        date: getCurrentDate(),
        tasks: dailyTasks
    }
    res.render("index.ejs", data);
});

app.get("/work", (req, res) => {
    var data = {
        date: getCurrentDate(),
        tasks: workTasks
    }
    res.render("work.ejs", data);
});

app.post("/", (req, res) => {
    if(req.body.newTask){
        dailyTasks.push(req.body.newTask)
    }
    var data = {
        date: getCurrentDate(),
        tasks: dailyTasks
    }
    res.render("index.ejs", data);
});

app.post("/work", (req, res) => {
    if(req.body.newTask){
        workTasks.push(req.body.newTask)
    }
    var data = {
        date: getCurrentDate(),
        tasks: workTasks
    }
    res.render("work.ejs", data);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


