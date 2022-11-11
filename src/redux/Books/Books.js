import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'add_remove_book',
  initialState: {
    books: [],
  },
  reducers: {
    // reducers and also action creators at the same time
    add: (state, { payload }) => {
      state.books.push(payload);
    },

    remove: (state, { payload }) => {
      state.books.filter((book) => book.id !== payload);
    },
  },
});

export const { add, remove } = bookSlice.actions;
export default bookSlice.reducer;
