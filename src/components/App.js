import React from 'react';
import TodoItem from './TodoItem';
import styles from './styles.css';

function App() {
  return(
    <div className="todo-list">
      <h1>This is a TODO list</h1>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </div>
  )
}

export default App
