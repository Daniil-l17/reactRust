import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { reducer } from "./slice";

export const store = configureStore({
  reducer: {
    serverDetail: reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)