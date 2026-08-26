import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
import todoReducer from "../features/todo/TodoSlice";
import preferenceReducer from "../features/preference/preferenceSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    preferences: preferenceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
