// src/components/AddTodo.js
import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // prevent adding empty todos
    addTodo(text); // Call the addTodo function from props
    setText(''); // Clear the input field after adding
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '10px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        style={{ flex: 1, padding: '8px' }}
      />
      <button type="submit" style={{ padding: '8px' }}>Add</button>
    </form>
  );
}

export default AddTodo;