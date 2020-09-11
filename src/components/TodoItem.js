import React from "react"

import styles from './styles.css';

function TodoItem() {

    const styles = {
        backgroundColor: "#8995F9",
        fontSize: 20,
        border: "solid black 1px",
        padding: 10,
        width: "200px"
    }

    return (
        <div className="todo-item">
            <input type="checkbox" id="item1" name="item1"></input>
            <p>Placeholder text</p>
            <br/>
        </div>
    )
}

export default TodoItem