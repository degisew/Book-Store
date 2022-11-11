import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'Categories',
  initialState: {
    categories: [],
  },
  reducers: {
    checkStatus: (state, { payload }) => {
      state.categories.push(payload);
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
