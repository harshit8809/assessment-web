

import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    allFormData: [],
  },
  reducers: {
    addFormData: (state, action) => {
      state.allFormData.push(action.payload);
    },
  },
});

export const { addFormData } = formSlice.actions;

export default formSlice.reducer;