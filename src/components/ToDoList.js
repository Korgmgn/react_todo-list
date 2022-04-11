import React from "react"

function toDoList(props) {

    console.log(props)

    const todoComponent = props.toDoList.map(task => {
        return (
            <li className="list-item pending">
                <label>
                    <input className="checkbox" type="checkbox"></input>
                    {task}
                </label>
            </li>
        )
    })
    

    return (
        <ul>
            {todoComponent}
        </ul>
    )
}

export default toDoList