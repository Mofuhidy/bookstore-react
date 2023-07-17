import { createSlice } from '@reduxjs/toolkit';

const initcialState = {
  categories: [],
  state: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initcialState,
  reducers: {
    stateCheck: (state, action) => {
      state.state = action.payload === '' ? 'Under construction' : null;
    },
  },
});

export const { stateCheck } = categoriesSlice.actions;
export default categoriesSlice.reducer;
