import React, { useState } from 'react';

function SearchForm({ getUser }) {

    const [ user, setUser ] = useState("")


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
        <form aria-label="form" onSubmit={handleSubmit}>
            <input type="text"
                    aria-label="User"
                    onChange={updateInput}
                     />
        </form>
    );
};

export default SearchForm;