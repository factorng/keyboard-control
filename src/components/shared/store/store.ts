import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "../../Popup/popupSlice";
import keyboardControlReducer from "../hocs/keyboardControlSlice";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    keyBoardControl: keyboardControlReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
