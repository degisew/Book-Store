import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const bookSlice = createSlice({
  name: 'add_remove_book',
  initialState: {
    books: [
      {
        id: uuidv4(),
        title: 'Zamra',
        author: 'Yismake',
      },
      {
        id: uuidv4(),
        title: 'Merbebit',
        author: 'Alemayehu',
      },
      {
        id: uuidv4(),
        title: 'Dertogada',
        author: 'Yismake',
      },
      {
        id: uuidv4(),
        title: 'Zubeyda',
        author: 'Alex',
      },
    ],
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
