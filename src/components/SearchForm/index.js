import React, { useState, useEffect } from 'react';
import './style.css';

function SearchForm({ getUser }) {

    const [ user, setUser ] = useState("getfutureproof")

    const state = useState();

    useEffect(() => {
        if(state.state == 'null' || !state.state) {
            setUser('getfutureproof')
        } else {
            setUser(state.state);
        }
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        getUser(user);
        setUser("");
    }

    const updateInput = e => {
        const input = e.target.value 
        setUser(input);
    }



    return (
        //----- FORM TO SEARCH USER
        <div clasName='card'>
            <form aria-label="form" onSubmit={handleSubmit} className="usercard">
                <input type="text"
                        aria-label="User"
                        onChange={updateInput}
                        />
                <button type="submit">Let's steal!</button>
            </form>


        </div>
    );
};

export default SearchForm;