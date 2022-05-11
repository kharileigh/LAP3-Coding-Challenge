import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../images';

const Header = () => { 
    return <>
        <nav>
        <img style={{ }} src='../../images/github-logo.png' alt='github-logo'/>
            <NavLink to='/search'>Search New User</NavLink>
        </nav>
        </>
};

export default Header;