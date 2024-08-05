import React, {useContext, useEffect} from 'react';
import { UserContext } from '../context/UserProvider';

function Profile() {

    

    const {user, getUserIssues} = useContext(UserContext)

    // useEffect(() => {
    //     getUserIssues()
    // }, [])


    return ( 
        <>
        <h1>Username: {user.username}</h1>
        </>
     );
}

export default Profile;