import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const {logOut}= useContext(AuthContext);
    const error = useRouteError();
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <p className='text-yellow-500'>Problem here</p>
            <p className='text-yellow-400'>{error.status || error.message}</p>
            <h4 className='text-3xl'>Please <button onClick={handleLogOut}>sign out</button> and log in</h4>
        </div>
    );
};

export default DisplayError;