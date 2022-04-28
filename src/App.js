import React, { useState } from "react"
import Header from "./components/Header"
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer"

function App() {

    const [toDoList, setToDoList] = useState(
        [
            {id: 1, task: "Learn React.js", checked: false}, 
            {id: 2, task: "Create a simple React.js App", checked: false}, 
            {id: 3, task: "Show your skills !", checked: false}
        ]
    )
    const [headerInputDisplay, setHeaderInputDisplay] = useState({isSearchBar: false, isAddNew: false})
    const [selectFilter, setSelectFilter] = useState({all: true, pending: false, completed: false})
    const [newTaskInput, setNewTaskInput] = useState("") //State for current input in the "new task" bar
    const [searchTaskInput, setSearchTaskInput] = useState("") //State for current input in the "search" bar

    //Sets search bar value as state
    function searchTaskChange(event) {
        setSearchTaskInput(event.target.value)
    }

    //Sets add new task bar value as state
    function newTaskChange(event) {
        setNewTaskInput(event.target.value)
    }

    //Adds new task, setting its value to be equal to the input precedently saved as state 
    function submitNewTask(event) {
        event.preventDefault()
        setToDoList(prevState => {
            return [...prevState, {id: prevState.length + 1, task: newTaskInput, checked: false}]
        })
        setNewTaskInput("")
    }

    //Sets task state to be "checked"
    function checkTask(taskId) {
        setToDoList(prevState => prevState.map(item => {
                return item.id === taskId ? {...item, checked: !item.checked} : item
            })
        )
    }

    //Changes current filter when clicking on one of three options in footer
    function toggleFilter(filter) {
        if(filter === "all") {
            setSelectFilter(prevState => {
                return {
                    ...prevState,
                    all: true,
                    pending: false,
                    completed: false
                }
            })
        } else if (filter === "pending") {
            setSelectFilter(prevState => {
                return {
                    ...prevState,
                    all: false,
                    pending: true,
                    completed: false
                }
            })
        } else if(filter === "completed") {
            setSelectFilter(prevState => {
                return {
                    ...prevState,
                    all: false,
                    pending: false,
                    completed: true
                }
            })
        }
    }

    //Displays or hides the input search bar or the input new task when clicking the related footer icon
    function toggleInputBar(inputType) {
        if(inputType === "searchBar"){
            setHeaderInputDisplay(prevState => {
                return {
                    ...prevState,
                    isSearchBar: !prevState.isSearchBar,
                    isAddNew: false
                }
            })
        } else if (inputType === "newTaskBar") {
            setHeaderInputDisplay(prevState => {
                return {
                    ...prevState,
                    isSearchBar: false,
                    isAddNew: !prevState.isAddNew
                }
            })
        }
    }

    return (
        <div className="App">
            <div className="container">
                <Header 
                    inputDisplayState={headerInputDisplay} 
                    newTaskValue={newTaskInput}
                    handleNewTaskChange={newTaskChange} 
                    handleSubmitNewTask={submitNewTask} 
                    searchTaskValue={searchTaskInput}
                    handleSearchTaskChange={searchTaskChange}
                />
                <ToDoList 
                    toDoListState={toDoList}
                    searchTaskInput={searchTaskInput}
                    handleCheckbox={checkTask}
                    filterValue={selectFilter}
                />
            </div>
            <Footer 
                toDoList={toDoList}
                filterState={selectFilter}
                handleToggleInputBar={toggleInputBar}
                handleFilter={toggleFilter}
            />
        </div>
    );
}

export default App;
