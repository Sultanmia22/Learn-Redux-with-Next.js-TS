import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => res.json());
  return response;
})

export interface ITodoItems {
  userId?: string;
  id: string;
  title: string;
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
        title: action.payload,
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

    toggleTodo: (state, action: PayloadAction<string>) => {
      if (!state.todosItems) {
        return;
      }
      const todo = state.todosItems.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action: PayloadAction<ITodoItems[]>) => {
      state.loading = false;
      state.todosItems = action.payload;
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Failed to fetch todos";
    });
  }
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
