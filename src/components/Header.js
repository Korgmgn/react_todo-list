import React from 'react';

const Header = ({inputState: {isAddNew, isSearchBar}, handleAddTaskChange, handleSubmit, newTaskValue}) => {
    return (
        <div>
            <header className="header">
                <h1 className="title">THINGS TO DO</h1>
                {isAddNew && 
                    <form className='form-box' onSubmit={handleSubmit}>
                        <input className="filter-input" type="text" value={newTaskValue} name="newTask" placeholder="Add new task" onChange={handleAddTaskChange} />
                    </form>
                }
                {isSearchBar && <input className="filter-input" name="searchTask" type="text" placeholder="Search"></input>}
            </header>
        </div>
    );
};

export default Header;