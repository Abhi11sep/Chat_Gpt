import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import './Todo.css';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-heading">Todo List</h1>
      <div className="todo-form">
        <input
          className="todo-input"
          type="text"
          placeholder="Add a new todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="todo-button" onClick={handleAddTodo}>
          <FaPlus />
        </button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <p>{todo}</p>
            <button
              className="todo-delete"
              onClick={() => handleDeleteTodo(index)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
