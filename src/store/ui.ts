import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  overlay: string | null;
  isOpen: boolean;
}

const initialState: State = {
  overlay: null,
  isOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state, a: PayloadAction<string | null>) => {
      const isOpen = !!a.payload;
      state.isOpen = isOpen;
      if (isOpen) {
        state.overlay = a.payload;
      }
    },
  },
});

const { ...actions } = {
  ...uiSlice.actions,
};

export const uiActions = actions;
export default uiSlice.reducer;
