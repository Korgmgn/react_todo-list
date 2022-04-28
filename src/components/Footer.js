import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus} from '@fortawesome/free-solid-svg-icons'

const Footer = ({toDoList, filterState, handleToggleInputBar, handleFilter}) => {

    
    return (
        <footer className="footer">
            <div className="btn-area">
                <div className="add-icon btn" onClick={() => handleToggleInputBar("newTaskBar")}>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                
                <div className="search-icon btn" onClick={() => handleToggleInputBar("searchBar")}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>                
            </div>
            <p className="counter">{toDoList.filter(item => !item.checked).length} items left</p>
            <div className="filter-area">
                <div className={filterState.all ? "filter-btn active" : "filter-btn inactive"} onClick={() => handleFilter("all")}>
                    All
                </div>

                <div className={filterState.pending ? "filter-btn active" : "filter-btn inactive"} onClick={() => handleFilter("pending")}>
                    Pending
                </div>

                <div className={filterState.completed ? "filter-btn active" : "filter-btn inactive"} onClick={() => handleFilter("completed")}>
                    Completed
                </div>
            </div>
        </footer>
    );
};

export default Footer;