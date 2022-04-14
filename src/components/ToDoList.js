import React from "react"

function toDoList({toDoListState, searchTaskInput}) {

    const searchResult = toDoListState.filter(item => {
        if(searchTaskInput === "") {
            return item
        } else {
            return item.task.toLowerCase().includes(searchTaskInput.toLowerCase())
        }
    })


    const todoComponent = searchResult.map(item => {
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
            {todoComponent.length > 0 ? todoComponent : <p className="list-item pending">No results</p>}
        </ul>
    )
}

export default toDoList