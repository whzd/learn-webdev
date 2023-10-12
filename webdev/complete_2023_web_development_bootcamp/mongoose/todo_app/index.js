import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"

const app = express()
const port = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/todolistDB")

const itemsSchema = {
  name: String
}

const Item = mongoose.model(
  "Item", itemsSchema
)

const item1 = new Item ({
  name: "Practice Guitar"
})

const item2 = new Item ({
  name: "Workout"
})

const item3 = new Item ({
  name: "Pratice Chess"
})

//Item.insertMany([item1, item2, item3])

function getCurrentDate() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const fullDate = new Date().toLocaleString("en-us", options).split(",")
  const monthAndDay = fullDate[1].split(" ")
  return{
      dow: fullDate[0],
      day: monthAndDay[2],
      month: monthAndDay[1],
      year: fullDate[2]
  }
}

app.get("/", async (req, res) => {
  const dailyTasks = await Item.find()
  const data = {
      date: getCurrentDate(),
      tasks: dailyTasks
  }
  res.render("index.ejs", data);
});

app.get("/work", (req, res) => {
    const data = {
        date: getCurrentDate(),
        tasks: workTasks
    }
    res.render("work.ejs", data);
});

app.post("/", (req, res) => {
    if(req.body.newTask){
        dailyTasks.push(req.body.newTask)
    }
    res.redirect("/")
});

app.post("/work", (req, res) => {
    if(req.body.newTask){
        workTasks.push(req.body.newTask)
    }
    res.redirect("/work")
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


