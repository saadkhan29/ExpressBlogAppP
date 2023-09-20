// Load express module
const express = require('express');

// Load mongoose module
const mongoose = require('mongoose');

// Load Express EJS Layouts
const expressLayouts = require("express-ejs-layouts");

// Invoke express functionality
const app = express();

// Port configurations
const port = 4000; 

// NodeJS to look in a folder called "views" for all ejs file.
app.set("view engine", "ejs");

// Look in views folder for a file named as layout.ejs
app.use(expressLayouts);

// Import Routes
const indexRouter = require('./routes/index');
const articleRouter = require('./routes/articles');

// Mount Routes
app.use("/", indexRouter)
app.use("/", articleRouter)

// Listen to requests on port
app.listen(port, () => {
  console.log(`Blog App is running on port ${port}`)
});

// MongoDB Connection
mongoose.connect("mongodb+srv://admin:admin@sei-06.51rhr3h.mongodb.net/blogapp?retryWrites=true&w=majority", {
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



