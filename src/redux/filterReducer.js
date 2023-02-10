import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    showFilter: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { showFilter } = filterSlice.actions;

export default filterSlice.reducer;
