const foobar = data => {
  return data;
};

export const fetchBookList = () => dispatch => {
  fetch(
    "http://api.nytimes.com/svc/books/v3/lists/overview.jsonp?callback=foobar&api-key=fGb2r2svRqG3avUwuU2j5UaIG7D7TANB"
  )
    .then(res => res.text())
    .then(data => {
      let validJson = eval(data);
      let results = validJson.results;
      let lists = results.lists;
      let bookList = lists.map(list => list.books).flat();
      console.log(bookList);
      dispatch({
        type: "FETCH_BOOKLIST",
        payload: bookList
      });
    })
    .catch(error => {
      console.error(error);
      alert("Could not load data from New York Times");
    });
};

export const displayBookDetail = bookInfo => dispatch => {
  console.log("reached!!!!");
  dispatch({
    type: "DISPLAY_BOOK_DETAIL",
    payload: bookInfo
  });
};
