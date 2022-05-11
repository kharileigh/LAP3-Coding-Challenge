import axios from 'axios';
import React, { useEffect } from 'react';


function User() {

    const [ user, setUser ] = useState("getfutureproof");
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        if (state.state == 'null' || !state.state) {
            setUser('getfutureproof')
        } else {
            setUser(state.state);
        }
    }, [])

    useEffect(() => {
        async function fetchUserData(){
            const username = await axios.get(`https://api.github.com/users/${username}`)
            const data = await username.json();
            setUserData(data)
        }

        fetchUserData()
    }, [user])



    // const dispatch = useDispatch();

    // const newUser = user => dispatch(loadUser(user));

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
