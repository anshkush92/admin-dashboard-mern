import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  // For testing purposes, I'm hardcoding the userId here, will be removing in future
  userId: "63701cc1f03239b7f700000e",
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
