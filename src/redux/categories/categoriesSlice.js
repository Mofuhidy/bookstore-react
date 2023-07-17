import { createSlice } from '@reduxjs/toolkit';

const initcialState = {
  categories: [],
  state: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initcialState,
  reducers: {
    stateCheck: (state) => {
      state.state = 'Under construction';
    },
  },
});

export const { stateCheck } = categoriesSlice.actions;
export default categoriesSlice.reducer;
