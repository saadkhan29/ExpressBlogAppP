// Load express module
const express = require('express');

// Load mongoose module
const mongoose = require('mongoose')

// Invoke express functionality
const app = express();

// Port configurations
const port = 4000; 

// Listen to requests on port
app.listen(port, () => {
  console.log(`Blog App is running on port ${port}`)
});



