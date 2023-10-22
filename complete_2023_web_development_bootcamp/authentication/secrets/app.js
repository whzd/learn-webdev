import dotenv from "dotenv"
import express from "express"
import passport from "passport"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import session from "express-session"
import passportLocalMongoose from "passport-local-mongoose"
import findOrCreate from "mongoose-findorcreate"
import passportGoogleOauth20 from "passport-google-oauth20"

const GoogleStrategy = passportGoogleOauth20.Strategy;

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
  password: String,
  googleId: String,
  secret: String
})

userSchema.plugin(passportLocalMongoose)
userSchema.plugin(findOrCreate)

const User = new mongoose.model("User", userSchema)

passport.use(User.createStrategy())

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, {
      id: user._id,
      username: user.username,
    });
  });
});

passport.deserializeUser(function(user, cb) {
  console.log(user)
  process.nextTick(function() {
    return cb(null, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/auth/google", passport.authenticate("google", {scope: ["profile"]}))

app.get("/auth/google/secrets",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/secrets")

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

app.get("/secrets", async (req, res) => {
  const foundUsers = await User.find({secret: {$ne: null}})
  res.render("secrets", { usersWithSecrets: foundUsers })
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

app.get("/submit", (req, res) => {
   if (req.isAuthenticated()){
    res.render("submit")
  } else {
    res.redirect("/login")
  }
})

app.post("/submit", async (req, res) => {
  const foundUser = await User.findById(req.user.id)
  if (foundUser){
    foundUser.secret = req.body.secret
    foundUser.save()
    res.redirect("/secrets")
  }
})

app.get("/logout", (req, res) => {
  req.logout( (err) => {
    if (err) { console.log(err) }
    res.redirect("/")
  })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
