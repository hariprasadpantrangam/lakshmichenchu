import React, { useState } from 'react';

function TodoApp() {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (todoText.trim() === '') {
      alert('Please enter an item');
      return;
    }
    setTodos([...todos, todoText]);
    setTodoText('');
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add</button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((item, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            {item}
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
