import React, { Component } from "react";

class BookDetail extends Component {
  render() {
    return (
      <div className="book-detail-info">
        {this.props.bookInfo ? (
          <div className="flex-wrapper">
            <img
              className="book-image"
              src={this.props.bookInfo.book_image}
              alt="Book Cover"
            />
            <div className="book-detail">
              <p>
                <span className="lable"> Book Title: </span>
                {this.props.bookInfo.title}
              </p>
              <p>
                <span className="lable">Author: </span>
                {this.props.bookInfo.author}
              </p>
              <p>
                <span className="lable">Publisher: </span>
                {this.props.bookInfo.publisher}
              </p>
              <p>
                <span className="lable">Rank: </span>
                {this.props.bookInfo.rank}
              </p>
              <p className="book-description">
                <span className="lable">Description: </span>
                {this.props.bookInfo.description}
              </p>
              <div className="btn-wrapper">
                {this.props.bookInfo.buy_links.map(link => {
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>Buy at {link.name}</button>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <p>
            Sorry, book information not found. Please select a book from the
            main page.
          </p>
        )}
      </div>
    );
  }
}

export default BookDetail;
