//BOILERPLATE AND REQUIRES
const express = require("express");
const path = require("path");
var mongoose = require("mongoose")
//express server opened
const app = express();
//|------------------------------------------------------------------------------------------------|

//HEROKU DEPLOYMENT SERVER BOILERPLATE

//or instantiated to open a port for Heroku
const PORT = process.env.PORT || 3001;
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//|------------------------------------------------------------------------------------------------|
// DATABASE CONFIGURATION: MONGO
var databaseUrl = "googlebooks";
var collections = ["Books"];

// Hook mongojs configuration to the db variable
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

//|------------------------------------------------------------------------------------------------|

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
