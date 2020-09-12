import React from 'react';
import TodoItem from './TodoItem';
import styles from './styles.css';
import todoData from './todoData';

function App() {

  const todoComponents = todoData.map(todo => <TodoItem id={todo.id} 
    text={todo.text} 
    completed={todo.completed}/> )

  return(
    <div className="todo-list">
      <h1>This is a TODO list</h1>
        {todoComponents}
    </div>
  )
}

export default App
