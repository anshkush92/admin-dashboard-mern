import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import toggleMode from "../features/Toggle/ToggleMode.slice";
import toggleSidebar from "../features/Toggle/ToggleSidebar.slice";
import { api } from "../services/api/api";

const store = configureStore({
  reducer: {
    toggleMode,
    toggleSidebar,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
