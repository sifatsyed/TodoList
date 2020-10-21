import React, { Component } from "react";

import styles from "./styles.css";

class TodoItem extends Component {
  render() {

    const taskDone = {
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.completed}
          onChange={() => this.props.handleChange(this.props.id)}
        />
        <p style={this.props.completed ? taskDone : null}>{this.props.text}</p>
        <br />
      </div>
    );
  }
}

export default TodoItem;
