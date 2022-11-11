import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './Categories/Categories';
import booksReducer from './Books/Books';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
