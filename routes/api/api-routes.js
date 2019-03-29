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


app.get("/api/search/:id",(req, res) =>{
    let id = req.params.id;
    console.log("id = " +id+ "\n \n \n \n");
    id = id.split(" ").join("+");
    console.log(id);
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + id + '&KEY=AIzaSyDuiU1KSuJb6SuKqjO5GOARr08t9YFD1lM').then(response => {
        res.send(response.data.items[0])
    })
})

app.get("/api/searchdb", (req, res) => {
    Book.find({ saved: true }).exec((err, data) => {
        if (err) { console.log(err) };
        console.log(data)
    })
})



app.post("/api/save/", function(req, res) {
    console.log(req.body)
    Book.create(req.body, err =>{
            if (err) console.log(err);
            else{console.log("added to db")}
        }
    );

  });
  





module.exports = app;