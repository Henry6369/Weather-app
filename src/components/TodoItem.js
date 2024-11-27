// src/components/TodoItem.js
import React from 'react';

function TodoItem({ todo, deleteTodo }) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} style={{ color: 'red' }}>Delete</button>
    </li>
  );
}

export default TodoItem;