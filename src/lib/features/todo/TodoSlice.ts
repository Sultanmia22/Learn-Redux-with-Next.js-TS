import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ITodoItems {
  id: string;
  text: string;
  completed: boolean;
}

export interface ITodoSate {
  todosItems: ITodoItems[];
  loading: boolean;
  error: string | null;
}

const initialState: ITodoSate = {
  todosItems: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      if (!state.todosItems) {
        state.todosItems = [];
      }
      state.todosItems.push({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      });
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      if (!state.todosItems) {
        return;
      }
      state.todosItems = state.todosItems.filter(
        (todo) => todo.id !== action.payload,
      );
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
