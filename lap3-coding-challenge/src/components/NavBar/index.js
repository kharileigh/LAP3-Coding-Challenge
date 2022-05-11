import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../images';

const NavBar = () => {

    let navigate = useNavigate();

    function handleClick() {
        navigate(-1);
    }

    const img = <img src="../../images/github-logo.png" />

    return (
        <nav>
            <img {...img} />
           
            <button onClick={handleClick}>Search New User</button>
        </nav>
    );
}

export default NavBar;
