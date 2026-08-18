import { createSlice } from "@reduxjs/toolkit";

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface ITodoSate {
  todos: ITodo[];
}

const initialState: ITodoSate = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
