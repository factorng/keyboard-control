import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Popup = {
  name: string;
  id: number;
  isOpen: boolean;
  isActive: boolean;
};

export interface IPopupsState {
  popups: Popup[];
}

const initialState: IPopupsState = {
  popups: [],
};

export type TInitPopupsPayload = {
  popupsNames: string[];
};
export type TChangePopupStatus = {
  popupId: number;
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    initPopups: (state, action: PayloadAction<TInitPopupsPayload>) => {
      const popups: Popup[] = [];
      action.payload.popupsNames.forEach((popupName, i) => {
        popups.push({
          name: popupName,
          id: i + 1,
          isOpen: false,
          isActive: false,
        });
      });
      state.popups = popups;
    },
    openPopup: (state, action: PayloadAction<TChangePopupStatus>) => {
      state.popups = state.popups.map((popup) => {
        if (popup.id === action.payload.popupId) {
          popup.isOpen = true;
        }
        return popup;
      });
    },
    closePopup: (state, action: PayloadAction<TChangePopupStatus>) => {
      state.popups = state.popups.map((popup) => {
        if (popup.id === action.payload.popupId) {
          popup.isOpen = false;
          popup.isActive = false;
        }
        return popup;
      });
    },
    setPopupActive: (state, action: PayloadAction<TChangePopupStatus>) => {
      state.popups = state.popups.map((popup) => {
        if (popup.id === action.payload.popupId) {
          popup.isActive = true;
        }
        return popup;
      });
    },
    setPopupInactive: (state, action: PayloadAction<TChangePopupStatus>) => {
      state.popups = state.popups.map((popup) => {
        if (popup.id === action.payload.popupId) {
          popup.isActive = false;
        }
        return popup;
      });
    },
  },
});

export const {
  initPopups,
  openPopup,
  closePopup,
  setPopupActive,
  setPopupInactive,
} = popupSlice.actions;

export default popupSlice.reducer;
