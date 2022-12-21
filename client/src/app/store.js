import { configureStore } from "@reduxjs/toolkit";

import toggleMode from "../features/Toggle/ToggleMode.slice";
import toggleSidebar from "../features/Toggle/ToggleSidebar.slice";

const store = configureStore({
  reducer: {
    toggleMode,
    toggleSidebar,
  },
});

export default store;
