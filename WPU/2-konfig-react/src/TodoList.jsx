import React, { useState } from 'react';

const TodoList = () => {
const [inputValue, setInputValue] = useState('');
const [todos, setTodos] = useState([]);

const handleInputChange = (e) => {
    setInputValue(e.target.value);
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
    setTodos([...todos, inputValue]);
    setInputValue('');
    }
};

return (
    <div>
    <h1>To-Do List</h1>
    <form onSubmit={handleFormSubmit}>
        <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        />
        <button type="submit">Add</button>
    </form>
    <ul>
        {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
        ))}
    </ul>
    </div>
    );
};

export default TodoList;
