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
      // because eslint doesn't allow fun parameter assignation, we create new var
      const stateVar = state;
      const filteredBooks = stateVar.books.filter(
        (book) => book.id !== payload,
      );
      stateVar.books = filteredBooks;
    },
  },
});

export const { add, remove } = bookSlice.actions;
export default bookSlice.reducer;
