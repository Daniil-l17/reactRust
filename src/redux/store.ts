import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { reducer } from "./slice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['api']
}

const reducerSmain = combineReducers({
  favoriteMainaAdd: reducer,
  [api.reducerPath]: api.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducerSmain)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      api.middleware,
    ),
})

/*[api.reducerPath]: api.reducer,*/
export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store)
setupListeners(store.dispatch)