

export const loading = user => (
    {
        type: 'LOADING',
        payload: user
    }
);


export const loadUser = ({ user: { login, avatar_url, repos_url, followers_url } }) => ({
    type: 'LOAD_USER',
    payload: { login, avatar_url, repos_url, followers_url }
});


export const error = err => (
    {
        type: 'ERROR',
        payload: 'Research your victim properly!'
    }
);


// const fetchUser = async searchUser => {
//     try {
//         const { data } = await axios.get(`https://api.github.com/users/${searchUser}`);
//         return data[0];
//     } catch(err) {
//         if (data.status === 404) { throw Error('Ain\t no code here for you to steal!') }
//         throw new Error(err.message)
// //     }
// // }

// export const getUser = searchUser => {
//     return (dispatch) => {
//         dispatch(loading(searchUser));
//         try {
//             const { login, avatar_url, repos_url, followers_url } = fetchUser(searchUser);
//             dispatch(loadUser({ user: {login, avatar_url, repos_url, followers_url}}))
//         } catch (err) {
//             if (data.status === 404) { throw Error('Research your victim properly!') }
//             dispatch({ type: 'ERROR', payload: err.message })
//         };
//     };
// };



