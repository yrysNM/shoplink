import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  text: "",
  title: "",
};

export const alertReducer = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.title = action.payload.title;
      state.text = action.payload.text;
    },
  },
});

export const { showAlert } = alertReducer.actions;

export default alertReducer.reducer;
