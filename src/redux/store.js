import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import videoReducer from "./videoSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({ user: userReducer, video: videoReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      //   serializableCheck: {
      //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      //   },
    }),
  devTools: false,
});

export const persistor = persistStore(store);
