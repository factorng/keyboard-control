import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IkeyboardControl {
  selectedIndex: number;
  selectedPopup: number;
  popupsCount: number;
  listLength: number;
  isEnterPressed: boolean;
  selectedIndexes: any;
}

const initialState: IkeyboardControl = {
  selectedIndex: 1,
  selectedPopup: 1,
  popupsCount: 3,
  listLength: 6,
  isEnterPressed: false,
  selectedIndexes: [],
};

export interface IsetEnterPressType {
  isEnterPressed: boolean;
}

export interface IinitKeyboardControl {
  popupsCount: number;
  listLength: number;
}

export const keyboardControlSlice = createSlice({
  name: "keyboardControl",
  initialState,
  reducers: {
    initKeyboardControl: (
      state,
      action: PayloadAction<IinitKeyboardControl>
    ) => {
      state.popupsCount = action.payload.popupsCount;
      state.listLength = action.payload.listLength;
    },
    arrowUp: (state) => {
      state.selectedIndex =
        state.selectedIndex !== 1 ? state.selectedIndex - 1 : state.listLength;
    },
    arrowDown: (state) => {
      state.selectedIndex =
        state.selectedIndex !== state.listLength ? state.selectedIndex + 1 : 1;
    },
    setEnterPress: (state, action: PayloadAction<IsetEnterPressType>) => {
      state.isEnterPressed = action.payload.isEnterPressed;
      const selectedIndexes = state.selectedIndexes;
      !selectedIndexes[state.selectedPopup] &&
        (selectedIndexes[state.selectedPopup] = []);
      selectedIndexes[state.selectedPopup].push(state.selectedIndex);
      state.selectedIndexes = selectedIndexes;
    },
    arrowLeft: (state) => {
      state.selectedPopup =
        state.selectedPopup !== 1 ? state.selectedPopup - 1 : 1;
      state.selectedIndex = 1;
    },
    arrowRight: (state) => {
      state.selectedPopup =
        state.selectedPopup !== state.popupsCount
          ? state.selectedPopup + 1
          : state.popupsCount;
      state.selectedIndex = 1;
    },
    setInitialState: (state) => {
      state.selectedIndex = 1;
      state.selectedPopup = 1;
      state.isEnterPressed = false;
    },
  },
});

export const {
  arrowUp,
  arrowDown,
  arrowLeft,
  arrowRight,
  setEnterPress,
  setInitialState,
} = keyboardControlSlice.actions;

export default keyboardControlSlice.reducer;
