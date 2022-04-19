import React from 'react';

const Footer = ({toDoList, filterState, handleToggleSearchBar, handleToggleAddNewTask, handleFilter}) => {

    
    return (
        <footer className="footer">
            <div className="btn-area">
                <div className="add-icon btn" onClick={handleToggleAddNewTask} >+</div>
                <div className="search-icon btn" onClick={handleToggleSearchBar}>Q</div>
            </div>
            <p className="counter">{toDoList.length} items left</p>
            <div className="filter-area">
                <div className={filterState.all ? "filter-btn active" : "filter-btn inactive"} onClick={() => handleFilter("all")}>All</div>
                <div className={filterState.pending ? "filter-btn active" : "filter-btn inactive"} onClick={() => handleFilter("pending")}>Pending</div>
                <div className={filterState.completed ? "filter-btn active" : "filter-btn inactive"} onClick={() => handleFilter("completed")}>Completed</div>
            </div>
        </footer>
    );
};

export default Footer;