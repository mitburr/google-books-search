//dependency
var express = require('express')
var mongojs = require("mongojs")
var axios = require("axios");
var Book = require("../../models/Book")
var mongoose = require("mongoose");

//setup router access
var app = express.Router();

// Database configuration
mongoose.connect("mongodb://localhost/googlebooks", { useNewUrlParser: true });


app.get("/api/search/",(req, res) =>{
    // console.log(req)
    let id = req.params.id;
    console.log("id = " +id+ "\n \n \n \n");
    // id.split(" ").join("%20");
    // console.log(id);
    axios.get('https://www.googleapis.com/books/v1/volumes?q=to+kill+a+mockingbird&KEY=AIzaSyDuiU1KSuJb6SuKqjO5GOARr08t9YFD1lM').then(response => {
        console.log(response.data.items);
        res.send(response.data.items[0].volumeInfo)
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