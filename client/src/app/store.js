import { configureStore } from "@reduxjs/toolkit";

import toggleMode from "../features/ToggleMode/ToggleMode.slice";

const store = configureStore({
  reducer: {
    toggleMode,
  },
});

export default store;
