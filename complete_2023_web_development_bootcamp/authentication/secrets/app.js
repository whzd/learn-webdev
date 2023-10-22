import bcrypt from "bcrypt"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"

dotenv.config()
const saltRounds = 10
const app = express()
const port = 3000;

app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://127.0.0.1:27017/userDB');

const userSchema = new mongoose.Schema ({
  email: String,
  password: String
})

const User = new mongoose.model("User", userSchema)

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/login", (req, res) => {
  res.render("login")
})

app.post("/login", async (req, res) => {
  const foundUser = await User.findOne({email: req.body.username})
  if (foundUser) {
    bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
      if (result) {
        res.render("secrets")
      } else {
        res.redirect("/login")
      }
    })
  } else {
    res.redirect("/login")
  }
})

app.get("/register", (req, res) => {
  res.render("register")
})

app.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
    const newUser = new User({
      email: req.body.username,
      password: hash
    })
    await newUser.save()
    res.render("secrets")
  })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
