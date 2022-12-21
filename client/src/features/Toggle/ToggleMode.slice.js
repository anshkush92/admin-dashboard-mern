import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

const toggleModeSlice = createSlice({
  name: "toggleMode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      // console.log("🚀 ~ file: ToggleMode.slice.js:13 ~ mode", state.mode);
    },
  },
});

export const { toggleMode } = toggleModeSlice.actions;

export default toggleModeSlice.reducer;
