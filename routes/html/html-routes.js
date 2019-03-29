//dependency
var express = require('express')
var axios = require("axios");
var mongoose = require("mongoose");

//setup router access
var app = express.Router();

// Database configuration
mongoose.connect("mongodb://localhost/googlebooks", { useNewUrlParser: true });

// app.get("/saved/", )

module.exports = app;