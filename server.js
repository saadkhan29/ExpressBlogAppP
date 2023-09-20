// Load express module
const express = require('express');

// Load mongoose module
const mongoose = require('mongoose')

// Invoke express functionality
const app = express();

// Port configurations
const port = 4000; 

// Import Routes
const indexRouter = require('./routes/index');

// Mount Routes
app.use("/", indexRouter)

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





