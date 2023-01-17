import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


import { v4 as uuidv4 } from "uuid";

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTask) => {
        const newTodo = {
            // import uuid package to use for arrays instead of using an array index
            id: uuidv4,
            task: newTask,
            isComplete: false,
        }
        setTodos([
            ...todos,
            newTodo
        ])
    }

    const toggleTodo = (targetId) => {
        
        const updatedTodos = todos.map(todo => {
            // if id and target match 
            if (todo.id === targetId) {
                // prevents mutating todo directly
                todo = {
                    ...todo,
                    isComplete: !todo.isComplete,
                }
            }
            // return todo to map no matter what
            return todo;
        })
        setTodos(updatedTodos);
    }

    const deleteTodo = (targetId) => {
        const filteredTodos = todos.filter(todo => todo.id !== targetId);
        setTodos(filteredTodos);
    }

    return (
        <div className="container">

            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    )
}

export default TodoApp;