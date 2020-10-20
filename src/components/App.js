import React from "react";
import TodoItem from "./TodoItem";
import todoData from "./todoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  
  handleChange(id) {
   this.setState(prevState => {
     const updatedState = prevState.todos.map( todo => {
       if(todo.id === id){
         todo.completed = !todo.completed
       }
       return todo;
     })
     return {
        todos: updatedState
     }
   })
  }

  render() {
    const todoComponents = this.state.todos.map((todo) => (
      <TodoItem id={todo.id} text={todo.text} completed={todo.completed} handleChange={this.handleChange}/>
    ));

    return (
      <div className="todo-list">
        <h1>This is a TODO list</h1>
        {todoComponents}
      </div>
    );
  }
}

export default App;
