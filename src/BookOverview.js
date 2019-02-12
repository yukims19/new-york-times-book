import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { displayBookDetail } from "./action/actionCreator.js";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  displayBookDetail: book => dispatch(displayBookDetail(book))
});

class BookOverview extends Component {
  handleClick = book => {
    this.props.displayBookDetail(book);
  };

  render() {
    return (
      <div className="flex-wrapper">
        {this.props.bookList ? (
          this.props.bookList.map(book => {
            return (
              <Link
                key={book.primary_isbn10}
                to={{
                  pathname: "/bookDetail",
                  search: "?isbn=" + book.primary_isbn10
                }}
              >
                <div
                  className="book-overview"
                  onClick={e => this.handleClick(book)}
                >
                  <div className="img-wrapper">
                    <img src={book.book_image} alt="Book Cover" />
                  </div>
                  <h3>{book.title}</h3>
                  <p>{book.contributor}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookOverview);
