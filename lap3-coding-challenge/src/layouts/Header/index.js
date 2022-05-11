import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => { 
    return <>
        <nav>
        <img ></img>
            <NavLink to='/search'>Search New User</NavLink>
        </nav>
        </>
};

export default Header;