import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    showMenu: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { showMenu } = menuSlice.actions;

export default menuSlice.reducer;
