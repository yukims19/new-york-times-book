import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBookList } from "./action/actionCreator.js";

import BookOverview from "./BookOverview.js";
import BookDetail from "./BookDetail.js";
import "./App.css";

const mapStateToProps = state => {
  return {
    bookList: state.simpleReducer.bookList,
    selectedBook: state.simpleReducer.selectedBook
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBookList: () => dispatch(fetchBookList())
});

const NoMatch = () => <div>Invalid URL</div>;

class App extends Component {
  componentDidMount() {
    this.props.fetchBookList();
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">New York Times Books</h1>
        <main>
          <Router>
            <div>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <BookOverview bookList={this.props.bookList} />}
                />
                <Route
                  path="/bookDetail"
                  render={() => (
                    <BookDetail bookInfo={this.props.selectedBook} />
                  )}
                />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Router>
        </main>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

/*{" "}
   <Route
   path="/bookDetail"
   render={() => (
   <BookDetail bookInfo={this.props.selectedBookInfo} />
   )}
   x
   />
 */
