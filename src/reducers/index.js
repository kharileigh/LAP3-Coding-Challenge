const initState = {
    user: {
        login: "",
        avatar_url: "",
        repos_url: "",
        followers_url: "",
},
   
    loading: true,
    error: false
};

const reducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, username: action.payload, loading: true };
        case 'LOAD_USER':
            return { ...state, user: action.payload, loading: false, error: false };
        case 'ERROR':
            return { ...state, error: action.payload };
        default: 
            return state;
    }
}

export default reducer;