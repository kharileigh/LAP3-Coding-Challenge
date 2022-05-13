import React from 'react';
import { useNavigate } from 'react-router-dom';
import gHLogo from '../../../public/images/github-logo.png';
import './style.css';

const NavBar = () => {

    let navigate = useNavigate();

    function handleClick() {
        navigate(-1);
    }



    return (
        <nav>
            
            <img src={gHLogo} />
           
            {/* <button className='button' onClick={handleClick}>Search New User</button> */}
        </nav>
    );
}

export default NavBar;
