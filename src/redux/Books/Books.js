import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'gPmJmxLEShCwGaxxSGRp';
const postBookThunk = createAsyncThunk('add', async (book) => {
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`;
  await fetch(url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
  return book;
});

const getBookThunk = createAsyncThunk('fetch', async () => {
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const removeBookThunk = createAsyncThunk('fetch', async (id) => {
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  await response.json();
  return id;
});

const bookSlice = createSlice({
  name: 'add_remove_book',
  initialState: {
    books: [],
    isLoading: false,
  },
  extraReducers: {
    [postBookThunk.pending]: (state) => {
      const newSate = state;
      newSate.isLoading = true;
    },
    [postBookThunk.fulfilled]: (state, { payload }) => {
      const newSate = state;
      newSate.books.push(payload);
      newSate.isLoading = false;
    },
    [postBookThunk.rejected]: (state) => {
      const newSate = state;
      newSate.isLoading = false;
    },
    [removeBookThunk.fulfilled]: (state, { payload }) => {
      const newState = state;
      const filtered = newState.books.filter(
        (book) => book.item_id !== payload,
      );
      newState.books = filtered;
    },
    [getBookThunk.fulfilled]: (state, { payload }) => {
      const newSate = state;
      const booksList = [];
      Object.keys(payload).forEach((key) => {
        const book = payload[key][0];
        book.item_id = key;
        booksList.push(book);
        newSate.books = booksList;
      });
    },
  },
});

export { getBookThunk, postBookThunk, removeBookThunk };
export const { add, remove } = bookSlice.actions;
export default bookSlice.reducer;
