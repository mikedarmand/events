import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Buy groceries' },
    { text: 'Finish coding project' },
    { text: 'Clean the house' },
  ]);

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos]; 
    newTodos.splice(index, 1); 
    setTodos(newTodos); 
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default App;
