import React, { useState } from 'react';

const TodoList = ({ todos, onRemoveTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span>{todo.text}</span>
          <button type="button" onClick={() => onRemoveTodo(index)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
