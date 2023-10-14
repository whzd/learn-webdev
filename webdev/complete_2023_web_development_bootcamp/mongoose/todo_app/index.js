import _ from "lodash"
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
  name: "Welcome to your todo list!"
})

const item2 = new Item ({
  name: "Hit the + button to add a new item."
})

const item3 = new Item ({
  name: "<-- Hit this to delete an item."
})

const defaultItems = [item1, item2, item3]

const listSchema = {
  name: String,
  items: [itemsSchema]
}

const List = mongoose.model("List", listSchema)

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

app.get("/:customListName", async (req, res) => {

  const result = await List.findOne({name: _.capitalize(req.params.customListName)})

  let data = {}
  
  if (!result){
    const list = new List({
      name: _.capitalize(req.params.customListName),
      items: defaultItems
    })
    await list.save()
    data = {
      date: getCurrentDate(),
      name: list.name,
      tasks: list.items
    }
  } else{
    data = {
      date: getCurrentDate(),
      name: result.name,
      tasks: result.items
    }
  }

  res.render("newList.ejs", data);
});

app.post("/", async (req, res) => {
  if(req.body.newTask){
    const newTask = new Item({
      name: req.body.newTask
    })
    if(req.body.listName){
      const list = await List.findOne({name: req.body.listName})
      list.items.push(newTask)
      list.save()
      res.redirect("/" + req.body.listName)
    } else {
      newTask.save()
      res.redirect("/")
    }
  }
});

app.post("/remove", async (req, res) => {
  if(req.body.doneTaskID){
    if (req.body.listName){
      await List.findOneAndUpdate({name: req.body.listName}, {$pull: {items: {_id: req.body.doneTaskID}}})
      res.redirect("/" + req.body.listName)
    } else {
      await Item.findByIdAndRemove(req.body.doneTaskID)
      res.redirect("/")
    }
  }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


