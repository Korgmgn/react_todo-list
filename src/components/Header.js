import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="header">
                <h1 className="title">THINGS TO DO</h1>
                <input className="filter-input" type="text" value="" placeholder="Add new task"></input>
                {/* <input className="filter-input" type="text" value="" placeholder="Search"></input> */}
            </header>
        </div>
    );
};

export default Header;