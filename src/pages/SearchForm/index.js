import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './style.css';


const SearchForm = () => {

    // useEffect(() => {
    //     dispatch(getUser("getfutureproof"));
    // }, []);

    // const dispatch = useDispatch();

    const [ inputUser, setInputUser ] = useState("");
    const [ user, setUser ] = useState("");
    const [ userData, setUserData ] = useState([]);
    const navigate = useNavigate();
   



    useEffect(() => {
        async function searchApi(searchUser) {
            try {
                const result = await axios.get(`https://api.github.com/users/?q=${searchUser}`);
                console.log(result.data);
                setUserData(result.data);
            } catch(err) {
                console.error(err);
            }
        }
        searchApi(userData);
    }, [user]);


    const updateInput = e => {
        const input = e.target.value 
        setInputUser(input);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setUser(inputUser);
        setInputUser("");
    }

    function renderUser() {
        return userData.map((s, i) => <li key={i}
                                       className="user-info"
                                       onClick={() => { navigate (`/${s.users.login}` )}}>
                                       {s.users.login}
                                       </li>)
    }


    return (
        //----- FORM TO SEARCH USER
        <div className='card'>

            <h2>Whose code do you want to steal now?</h2>
            <form aria-label="form" onSubmit={handleSubmit} className="usercard">
                <input 
                        type="text"
                        aria-label="User"
                        placeholder='Steal that code here!'
                        onChange={updateInput}
                        value={inputUser}
                        />
                <button type="submit">Let's steal!</button>
            </form>

            <ol>{renderUser()}</ol>
        </div>
    );
};

export default SearchForm;