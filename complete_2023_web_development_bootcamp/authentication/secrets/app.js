import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import encrypt from "mongoose-encryption"

dotenv.config()
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

userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ["password"]})

const User = new mongoose.model("User", userSchema)

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/login", (req, res) => {
  res.render("login")
})

app.post("/login", async (req, res) => {
  const foundUser = await User.findOne({email: req.body.username})
  if (foundUser && foundUser.password === req.body.password) {
    res.render("secrets")
  } else {
    res.redirect("/login")
  }
})

app.get("/register", (req, res) => {
  res.render("register")
})

app.post("/register", async (req, res) => {
  const newUser = new User({
    email: req.body.username,
    password: req.body.password
  })

  await newUser.save()
  res.render("secrets")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
