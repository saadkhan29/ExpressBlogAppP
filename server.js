// Load express module
const express = require('express');

// Load dotenv module
require('dotenv').config();

// Load mongoose module
const mongoose = require('mongoose');

// Load Express EJS Layouts
const expressLayouts = require("express-ejs-layouts");

// Invoke express functionality
const app = express();

// Look for static files here (CSS, JS, Image, Video, Audio)
app.use(express.static("public"))

// Port configurations
const port = process.env.PORT; 

// NodeJS to look in a folder called "views" for all ejs file.
app.set("view engine", "ejs");

// Look in views folder for a file named as layout.ejs
app.use(expressLayouts);

// Express Session and Passport
let session = require('express-session');
let passport = require('./helper/ppConfig');

app.use(session({
  secret: process.env.SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: {maxAge: 36000000}
}))

// Initialize passport and passport session
app.use(passport.initialize());
app.use(passport.session());

// Import Routes
const indexRouter = require('./routes/index');
const articleRouter = require('./routes/articles');
const authorRouter = require('./routes/authors');
const authRouter = require('./routes/auth');

// Mount Routes
app.use("/", indexRouter);
app.use("/", articleRouter);
app.use("/", authorRouter);
app.use("/", authRouter);

// Listen to requests on port
app.listen(port, () => {
  console.log(`Blog App is running on port ${port}`)
});

// MongoDB Connection
mongoose.connect(process.env.mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected!!!")
})
.catch((err) => {
  console.log("MongoDB is not connected" + err)
});


// app.get("/a", (req, res) => {
//   res.render("home/another")
// })



