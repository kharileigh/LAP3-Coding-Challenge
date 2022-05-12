import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import './style.css';

const UserData = () => {
    
    const [ userData, setUserData ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {

        
        async function getUserData(user) {

            try {
                const { login, avatar_url, repos_url, followers_url } = user; 
                const result = await axios.get(`https://api.github.com/users/?q=${user}`);
                setUserData(result.data);
                dispatch(setUserData({ user: {login, avatar_url, repos_url, followers_url}}))
            } catch (err) {
                console.error(err)
                if (data.status === 404) { throw Error('Research your victim properly!') } 
            }
        }
        getUserData(user)
    }, [user])

    return <>
                <h1>{userData.name}</h1>
                <img {...userData.avatar_url} />
                <h3> Repositories: {userData.repos_url}</h3>
                <h4> Followers: {userData.followers_url}</h4>
                <button onClick={() => {navigate(-1)}}>Search New User</button>
        
            </>

}
export default UserData;
