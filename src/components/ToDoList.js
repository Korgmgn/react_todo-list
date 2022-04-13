import React from "react"

function toDoList({toDoListState}) {

    const todoComponent = toDoListState.map(item => {
        return (
            <li className="list-item pending" key={item.id}>
                <label>
                    <input className="checkbox" type="checkbox"></input>
                    {item.task}
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