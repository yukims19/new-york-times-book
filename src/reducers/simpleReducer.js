const initialState = {
  bookList: null,
  selectedBook: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKLIST":
      return Object.assign({}, state, {
        bookList: action.payload
      });
    case "DISPLAY_BOOK_DETAIL":
      return Object.assign({}, state, {
        selectedBook: action.payload
      });

    default:
      return state;
  }
};
