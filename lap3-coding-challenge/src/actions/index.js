import axios from 'axios';

const loading = user => (
    {
        type: 'LOADING',
        payload: user
    }
);


const loadUser = ({ user: {  login, avatar_url, repos_url, followers_url } }) => ({
    type: 'LOAD_USER',
    payload: { login, avatar_url, repos_url, followers_url }
});


export const getUser = searchUser => {
    
    return async (dispatch) => {
        dispatch(loading(searchUser));
        try {
            const { data }= await axios.get(`https://api.github.com/users/${searchUser}`);
            return data[0];
            dispatch(loadUser(user))
        } catch (err) {
            if (data.status === 404) { throw Error('Research your victim properly!') }
           dispatch({ 
               type: 'ERROR', 
               payload: err.message
           })
        };
    };
};






export const fetchDogs = () => {

    return async (dispatch) => {
        try {
            const { data } = await axios.get("https://dog.ceo/api/breeds/image/random/40");
            const dogList = data.message.map((url, i) => ({ id: i, img: url, liked: false}))
            dispatch({
                type: 'LOAD_DOGS',
                payload: dogList
            })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err.message
            })
        }
    }

};