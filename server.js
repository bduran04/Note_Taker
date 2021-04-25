//use server.js file from activities. 

// Dependencies
const express = require('express');
const fs = require('fs');
const notes = require('./db/db.json');
const path = require('path');
const uuid = require('uuid');

// Sets up the Express App
//calling the package that insatlled and storing in var
const app = express();
//the heroku deployment is going to go here. 
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require('./routes/apiRoutes'));
app.use(require('./routes/htmlRoutes'));

//this tells express what port listening on
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
