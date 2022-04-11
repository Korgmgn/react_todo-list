import React from "react"
import Header from "./components/Header"
import ToDoList from "./components/ToDoList";

function App() {


    const toDoList = ["First task", "Second task", "Third task", "Fourth task"]


    return (
        <div className="App">
            <div className="container">
                <Header />
                <ToDoList toDoList={toDoList}/>
            </div>
            <footer className="footer">
                <div className="btn-area">
                    <div className="add-icon btn" >+</div>
                    <div className="search-icon btn">Q</div>
                </div>
                <p className="counter">{toDoList.length} items left</p>
                <div className="filter-area">
                    <div className="filter-btn active">All</div>
                    <div className="filter-btn inactive">Active</div>
                    <div className="filter-btn inactive">Completed</div>
                </div>
            </footer>
            <p className="bottom-info">Press 'esc' to cancel</p>
        </div>
    );
}

export default App;
