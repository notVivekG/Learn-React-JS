import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id:1,
        text: "Hello World"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find(t => t.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
            }
        }
        // Faster :-
        //      updateTodo: (state, action) => {
        //          const index = state.todos.findIndex(todo => todo.id === action.payload.id);
        //          if (index !== -1) {
        //              state.todos[index] = action.payload;
        //          }
        //      }

    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer;
