import dotenv from "dotenv"
import express from "express"
import passport from "passport"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import session from "express-session"
import passportLocalMongoose from "passport-local-mongoose"

dotenv.config()
const app = express()
const port = 3000;

app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  secret: "Thisisourlittlesecret.",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.session())

mongoose.connect('mongodb://127.0.0.1:27017/userDB');

const userSchema = new mongoose.Schema ({
  email: String,
  password: String
})

userSchema.plugin(passportLocalMongoose)

const User = new mongoose.model("User", userSchema)

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/login", (req, res) => {
  res.render("login")
})

app.post("/login", (req, res) => {
  const user = new User ({
    username: req.body.username,
    password: req.body.password
  })
  req.login(user, (err) => {
    if (err) { console.log(err) }
    else {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/secrets")
      })
    }
  })
})

app.get("/secrets", (req, res) => {
  if (req.isAuthenticated()){
    res.render("secrets")
  } else {
    res.redirect("/login")
  }
})

app.get("/register", (req, res) => {
  res.render("register")
})

app.post("/register", (req, res) => {
  User.register({username: req.body.username, active: false}, req.body.password, (err, user) => {
    if (err){
      console.log(err)
      res.redirect("/register")
    } else {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/secrets")
      })
    }
  })

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
