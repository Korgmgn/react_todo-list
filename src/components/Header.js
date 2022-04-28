import React from 'react';

const Header = ({inputDisplayState: {isAddNew, isSearchBar}, newTaskValue, handleNewTaskChange, handleSubmitNewTask, searchTaskValue, handleSearchTaskChange}) => {
    return (
        <div>
            <header className="header">
                <h1 className="title">THINGS TO DO</h1>
                {isAddNew && 
                    <form className='form-box' onSubmit={handleSubmitNewTask}>
                        <input 
                            className="filter-input" 
                            placeholder="Add new task" 
                            name="newTask" 
                            type="text" 
                            value={newTaskValue} 
                            onChange={handleNewTaskChange}
                            maxLength="100"
                        />
                    </form>
                }
                {isSearchBar && 
                    <input 
                        className="filter-input" 
                        placeholder="Search" 
                        type="text" 
                        name="searchTask" 
                        value={searchTaskValue} 
                        onChange={handleSearchTaskChange}
                        maxLength="100"
                    />
                }
            </header>
        </div>
    );
};

export default Header;