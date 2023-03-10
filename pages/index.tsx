"use-client"

import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";

const LOCAL_STORAGE_KEY = "next-todo-list-todos";


function App() {
  const [todos, setTodos] = useState([]);


useEffect(() => {
   
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);


  useEffect(() => {
   
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);


  function addTodo(todo) {

    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    console.log(id)
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          console.log(todo.id === id)
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        Next Todo
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;