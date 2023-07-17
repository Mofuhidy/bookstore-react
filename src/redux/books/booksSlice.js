import { createSlice } from '@reduxjs/toolkit';

const initcialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState: initcialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
