
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const activeStyle = { color: "navy" }

    return (

        <nav>
            <NavLink activeClassName={activeStyle} exact to="/" >Home</NavLink>
            {" | "}
            <NavLink activeClassName={activeStyle} exact to="/questions" >Questions</NavLink>
            {" | "}
            <NavLink activeClassName={activeStyle} exact to="/addquestion">Add</NavLink>
            {" | "}
            <NavLink activeClassName={activeStyle} exact to="/modifyquestion">Modify</NavLink>

        </nav>

    )
}

export default Header;
