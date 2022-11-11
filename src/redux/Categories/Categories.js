import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'Categories',
  initialState: {
    categories: [],
  },
  reducers: {
    checkStatus: (state, { payload }) => {
      const usableState = state;
      if (payload) {
        usableState.categories.push(payload);
      }
      // usableState.categories = [];
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
