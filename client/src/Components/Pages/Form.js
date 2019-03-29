import React, { Component } from "react";
import API from "../Utils/API"
import { Container } from "../components/Grid/Container"
import { Row } from "../components/Grid/Row"
import { Col } from "../components/Grid/Col"
import Jumbotron from "../components/Jumbotron"
import SaveBtn from "../components/SaveBtn"
import { List, ListItem } from "../components/List";



class Form extends Component {
  // Setting the component's initial state
  state = {
    bookTitle: "",
    bookAuthors: "",
    bookDescription: "",
    bookImage: "",
    bookLink: "",
    bookTitles: []
  };

  saveBook = (id, i) => {
    //this is difficult to read, but the gist is that we change the "saved" variable in the appropriate object in the bookTitles array to true.

    //we're going to us .map to replace bookTitles with an equivalent array where the saved state has been changed
    this.setState({
      bookTitles:
        //call .map
        this.state.bookTitles.map((element, index) => {
          //we need the object where i is the same as the i from the button
          //I honestly can't believe the scoping worked so cleanly for this
          if (index === i) {
            //since element is the object and saved should be the boolean, we can now use the button to "switch" them from the list.
            element.saved = !element.saved;
            return element;
          } else {
            return element
          }
        })
    });
    API.saveBook(id)
      .then(res => {console.log(res)})
      .catch(err => console.log(err));
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
    //check to make sure something was entere
    if (!this.state.bookTitle) {
      alert("Fill out a book title please!");
    } else {
      //test for onlcick to work
      alert('Well, here it is.');
      //API.getbook makes an axios call. We return the promise, and then use the response from the call.
      API.getBook(this.state.bookTitle).then(res => {
        //declaring the relevant data as an object serves two purposes: dryer code in setstate and keeping track of all searched books in the array
        let bookobj = {
          bookTitle: res.data.volumeInfo.title,
          bookAuthors: res.data.volumeInfo.authors,
          bookDescription: res.data.volumeInfo.description,
          bookImage: res.data.volumeInfo.imageLinks.thumbnail,
          bookLink: res.data.volumeInfo.previewLink,
          saved: false
        }
        //alter state
        this.setState(
          {
            bookTitle: bookobj.bookTitle,
            bookAuthors: bookobj.bookAuthors,
            bookDescription: bookobj.bookDescription,
            bookImage: bookobj.bookImage,
            bookLink: bookobj.bookLink,
            bookTitles: [...this.state.bookTitles, bookobj]
          },
        );
      })
    }
  }


  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <Container fluid>
        <p>
          What book would you like to add to my list??
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
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>

          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
              <h5>The green check will add the book to my list, the red check will remove it.</h5>
            </Jumbotron>
            {this.state.bookTitle.length ? (
              <List>
                {this.state.bookTitles.map((book, i) => {
                  console.log(this.state.bookTitles)
                  return (
                    <ListItem key={book.bookTitle}>
                      <a href={book.bookLink}>
                        <strong>
                          {book.bookTitle} by {book.bookAuthors}
                        </strong>
                      </a>
                      <SaveBtn saved = {book.saved} onClick={() => this.saveBook(book, i)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>

    );
  }
}

export default Form;
