import React, { Component } from "react";
import API from "../Utils/API"

class Form extends Component {
  // Setting the component's initial state
  state = {
    bookTitle: "",
    bookTitles: []
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.bookTitle) {
      alert("Fill out a book title please!");
    } else {
      alert('Well, here it is.');
      console.log(API.getBook(this.state.bookTitle));
    }
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          What book would you like to search for?
        </p>
        <form className="form">
          <input
            value={this.state.bookTitle}
            name="bookTitle"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
