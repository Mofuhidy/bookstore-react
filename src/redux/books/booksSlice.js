import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const APPID = 'K9GpBrit39mBb31QaF12';
const BASEURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APPID}/books/`;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (thunkAPI) => {
  try {
    const response = await axios.get(BASEURL);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
    return error;
  }
});

export const addBookByAPI = createAsyncThunk('books/addBook', async (book, thunkAPI) => {
  const newBook = {
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: book.category,
  };

  try {
    const addBook = await axios.post(BASEURL, newBook);
    return { book, addBook };
  } catch (error) {
    thunkAPI.rejectWithValue(error);
    return error;
  }
});

export const deleteBookByAPI = createAsyncThunk('books/deleteBook', async (book, thunkAPI) => {
  try {
    const deleteBook = await axios.delete(`${BASEURL}${book.item_id}`);
    return { book, deleteBook };
  } catch (error) {
    thunkAPI.rejectWithValue(error);
    return error;
  }
});

const initcialState = {
  books: [],
  loading: 'idle', // 'pending' | 'succeeded' | 'failed'
  error: undefined,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState: initcialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.books = state.books.filter((book) => book.item_id !== itemId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = 'pending';
    }).addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      const bookData = Object.keys(action.payload).map((item) => {
        const data = {};
        data.title = action.payload[item][0].title;
        data.author = action.payload[item][0].author;
        data.category = action.payload[item][0].category;
        data.item_id = item;
        return data;
      });
      state.books = bookData;
      state.error = '';
    }).addCase(fetchBooks.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error.message;
    });
  },

});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
