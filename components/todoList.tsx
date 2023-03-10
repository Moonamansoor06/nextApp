"use-client"

import { List } from "@mui/material";
import React from "react";
import Todo from "./todo";

function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <List>
      {todos.map(todo => {
        console.log(todo.id)
        return(
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      )})}
    </List>
  );
}

export default TodoList;