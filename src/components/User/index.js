import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../actions';


function User({ searchUser }) {

    const [ user, setUser ] = useState("getfutureproof");
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        dispatch(getUser("getfutureproof"));
    }, []);

    const dispatch = useDispatch();


    useEffect(() => {
        async function fetchUserData(){
            const username = await axios.get(`https://api.github.com/users/${username}`)
            const data = await username.json();
            setUserData(username)
        }

        fetchUserData()
    }, [user])



    return (
        <section>
        <div id='user'>
            <img src={userData.avatar_url} alt="GitHub User" />
            <h2>{userData.login}</h2>
            <h3>{userData.repos_url}</h3>
            <h4>{userData.followers_url}</h4>

        </div>

        </section>
    )
};

export default User;
