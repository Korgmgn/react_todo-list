import React from "react"

function toDoList({toDoListState, searchTaskInput, handleCheckbox, filterValue}) {
    console.log(filterValue)
    
    const searchResult = toDoListState.filter(item => {
        if(searchTaskInput === "") {
            return item
        } else {
            return item.task.toLowerCase().includes(searchTaskInput.toLowerCase())
        }
    })

    const filterSearchResult = searchResult.filter(item => {
        if(filterValue.all || (!item.checked && filterValue.pending)) {
            return item
        } else if (filterValue.all || (item.checked && filterValue.completed)) {
            return item
        } else {
            return item
        }
    })

    const todoComponent = filterSearchResult.map(item => {
        return (
            <li className={item.checked ? "list-item completed" : "list-item"} key={item.id}>
                <label>
                    <input className="checkbox" type="checkbox" checked={item.checked} onChange={() => handleCheckbox(item.id)} ></input>
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