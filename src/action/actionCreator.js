const foobar = data => {
  return data;
};

export const fetchBookList = () => dispatch => {
  fetch(
    "http://api.nytimes.com/svc/books/v3/lists/overview.jsonp?callback=foobar&api-key=fGb2r2svRqG3avUwuU2j5UaIG7D7TANB"
  )
    .then(res => res.text())
    .then(jsonP => {
      let validJson;
      var foo = new Function("foobar", jsonP);
      foo(function(json) {
        validJson = json;
      });
      const results = validJson.results;
      const lists = results.lists;
      const bookList = lists.map(list => list.books).flat();
      const bookListUnique = [];
      const map = new Map();
      for (const item of bookList) {
        if (!map.has(item.primary_isbn10)) {
          map.set(item.primary_isbn10, true);
          bookListUnique.push(item);
        }
      }
      dispatch({
        type: "FETCH_BOOKLIST",
        payload: bookListUnique
      });
    })
    .catch(error => {
      console.error(error);
      alert("Could not load data from New York Times");
    });
};

export const displayBookDetail = bookInfo => dispatch => {
  dispatch({
    type: "DISPLAY_BOOK_DETAIL",
    payload: bookInfo
  });
};
