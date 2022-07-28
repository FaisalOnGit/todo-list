import React, { useState } from 'react';

export const TodoForm = (props) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input value={input} onChange={(e) => setInput(e.target.value)} className="todo-input" placeholder="Enter a todo" />
      <button className="todo-button" type="submit">
        Add Todo
      </button>
    </form>
  );
};
