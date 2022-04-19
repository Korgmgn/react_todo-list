import React, { useState } from "react"
import Header from "./components/Header"
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer"

function App() {

    //Pour les filtres, ajouter clé "checked: boolean" dans toDoList
    const [toDoList, setToDoList] = useState([{id: 1, task: "First task", checked: false}, {id: 2, task: "Second task", checked: false}])
    const [headerInputDisplay, setHeaderInputDisplay] = useState({isSearchBar: false, isAddNew: false})
    const [selectFilter, setSelectFilter] = useState({all: true, pending: false, completed: false})
    const [newTaskInput, setNewTaskInput] = useState("")
    const [searchTaskInput, setSearchTaskInput] = useState("")

    console.log(toDoList)


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

    //Refactoriser et fusionner les deux fonctions suivantes
    function toggleSearchBar() {
        setHeaderInputDisplay(prevState => {
            return {
                ...prevState,
                isSearchBar: !prevState.isSearchBar,
                isAddNew: false
            }
        })
    }
    
    function toggleAddNewTask() {
        setHeaderInputDisplay(prevState => {
            return {
                ...prevState,
                isSearchBar: false,
                isAddNew: !prevState.isAddNew
            }
        })
    }

    function searchTaskChange(event) {
        setSearchTaskInput(event.target.value)
    }

    function newTaskChange(event) {
        setNewTaskInput(event.target.value)
    }

    function submitNewTask(event) {
        event.preventDefault()
        setToDoList(prevState => {
            return [...prevState, {id: prevState.length + 1, task: newTaskInput, checked: false}]
        })
        setNewTaskInput("")
    }

    function checkTask(taskId) {
        setToDoList(prevState => prevState.map(item => {
                return item.id === taskId ? {...item, checked: !item.checked} : item
            })
        )
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
                handleToggleSearchBar={toggleSearchBar}
                handleToggleAddNewTask={toggleAddNewTask}
                handleFilter={toggleFilter}
            />
            {/* add keyboard commands */}
            <p className="bottom-info">Press 'esc' to cancel</p>
        </div>
    );
}

export default App;
