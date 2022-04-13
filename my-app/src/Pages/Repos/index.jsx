import React from 'react';
import { useParams } from 'react-router-dom';
import { DisplayResults } from '../../components';

export const Repos = () => {

    const {username} = useParams();
    console.log(username)

return(
    <>
    <h1>Your Repos!</h1>
    <DisplayResults username={username}/>
    </>
)
}
