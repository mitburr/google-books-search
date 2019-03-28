//dependency
var express = require('express')
var mongojs = require("mongojs")
var axios = require("axios");
var Book = require("../models/Book")
var mongoose = require("mongoose");

//setup router access
var app = express.Router();

// Database configuration
mongoose.connect("mongodb://localhost/googlebooks", { useNewUrlParser: true });


app.get("/api/search/:id",(req, res) =>{
    let id = req.params.id;
    console.log(id);
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' +
    id +
    'key=AIzaSyDlrZGqoCj2M3YA0HTnS9S0qAcyLL3NdO8').then(response => {
        console.log(response);
    })
})

app.get("/api/searchdb", (req, res) => {
    Book.find({ saved: true }).exec((err, data) => {
        if (err) { console.log(err) };
        console.log(data)
    })
})



app.post("api/save/", function(req, res) {
    console.log(req.body)
    Book.create(
        {title: "title"},
        {authors: "authors"},
        {description: "description"},
        {image: "image"},
        {link: "link"},
        {saved: true}, err =>{
            if (err) console.log(err);
        }
    );

  });
  





module.exports = app;