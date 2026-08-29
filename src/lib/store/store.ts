import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
import todoReducer from "../features/todo/TodoSlice";
import preferenceReducer from "../features/preference/preferenceSlice";
import storage from "./storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  preferences: preferenceReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["preferences"],
};

const persistedReducre = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducre,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
