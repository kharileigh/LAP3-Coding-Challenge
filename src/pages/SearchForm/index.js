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
    const [ user, setUser ] = useState("getfutureproof");
    const [ userData, setUserData ] = useState([]);
    const navigate = useNavigate();
   



    useEffect(() => {
        async function searchApi(searchUser) {
            try {
                const result = await axios.get(`https://api.github.com/users/${searchUser}`);
                console.log(result.data);
                setUserData(result.data);
            } catch(err) {
                console.error(err);
            }
        }
        searchApi(user);
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
        console.log(userData);
        
        // BUILD CARD DATA HERE!
        return <> <h1>{userData.login}</h1>  
                <h2>{userData.bio}</h2> 
                <h3>Location: {userData.location}</h3>
                <h3>Followers: {userData.followers}</h3>
                <h3>Repositories: {userData.public_repos}</h3>
               
                
                </> 
                 
                
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