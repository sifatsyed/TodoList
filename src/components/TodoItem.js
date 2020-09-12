import React from "react"

import styles from './styles.css';

function TodoItem(props) {

    const styles = {
        backgroundColor: "#8995F9",
        fontSize: 20,
        border: "solid black 1px",
        padding: 10,
        width: "200px"
    }

    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.completed} id="item1" name="item1"></input>
            <p>{props.text}</p>
            <br/>
        </div>
    )
}

export default TodoItem