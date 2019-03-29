// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new Book object
// This is similar to a Sequelize model
var book = new Schema({
  bookTitle: {
    type: String,
  },
  bookAuthors: {
    type: [String],
  },
  bookDescription: {
    type: String,
    unique: true,
  },
  bookImage: {
    type: String,
  },
  bookLink: {
    type: String,
  },
  //saved is a boolean which is utilized to display saved. I'm hoping that setting default to false sets the value of the key to false and not making default unnecessary
  saved:{
    type: Boolean,
    default: false,
  }
});

// This creates our model from the above schema, using mongoose's model method
const Book = mongoose.model("Book", book);

// Export the Book model, capitalized to indicate generality. 
module.exports = Book;