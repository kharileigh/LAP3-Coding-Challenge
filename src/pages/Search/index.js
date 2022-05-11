import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { User, SearchForm} from '../../components';
import { getUser } from '../../actions';
import './style.css';

function Search() {

    useEffect(() => {
        dispatch(getUser("getfutureproof"));
    }, []);

    const user = useSelector(state => state.user);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error)

    const dispatch = useDispatch();

    const search = searchUser => dispatch(getUser(searchUser));

    const renderUser = () => loading ? <p>Loading . . . </p> : 
    <User user={user}/>

    return (
        <>

           <div className='card'>
           <h2>Whose code do you want to steal?</h2>
            <SearchForm getUser={search}/>

          { error ? <h4 role="alert">Oops there's been an error! {error}</h4> 
          
          : renderUser()
            
        
        }
 

            </div>
        </>
    );
}

export default Search;