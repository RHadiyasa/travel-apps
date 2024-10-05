// Ini adalah global state dari Redux
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  // ini isinya adalah state dari redux
  user: userReducer,
});

// Persist Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignorePaths: ["register", "rehydrate"],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
