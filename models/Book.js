// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new Book object
// This is similar to a Sequelize model
var Book = new Schema({
  //title is required, denotes title of novel
  title: {
    type: String,
    required: "title is Required",
    unique: true,
  },
  //a novel may be co-authored, so an array of strings is necessary
  authors: {
    type: [String],
    required: 'author or authors are required.'
  },
  //description of the novel is required because googlebook supplies it
  description: {
    type: String,
    required: "description",
  },
  //image is sent as a link by google, so it's required as well
  image: {
    type: String,
    required: "String is Required",
  },
  //link to more information is important and included in the call so also required. 
  link: {
    type: String,
    required: "String is Required",
  },
  //saved is a boolean which is utilized to display saved. I'm hoping that setting default to false sets the value of the key to false and not making default unnecessary
  saved:{
    type: Boolean,
    required: true,
    default: false,
  }
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", Book);

// Export the Book model, capitalized to indicate generality. 
module.exports = Book;