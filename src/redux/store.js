import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuReducer";
import filterReducer from "./filterReducer";
import alertReducer from "./alertReducer";

export const store = configureStore({
  reducer: { menu: menuReducer, filter: filterReducer, alert: alertReducer },
});
