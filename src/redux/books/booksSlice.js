import { createSlice } from '@reduxjs/toolkit';

const initcialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState: initcialState,
  reducers: {
    addBook: (state, action) => {

    },
    removeBook: (state, action) => {

    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
