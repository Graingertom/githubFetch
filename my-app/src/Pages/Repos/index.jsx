import React from 'react';
import { useParams } from 'react-router-dom';
import { DisplayResults } from '../../components';

export const Repos = () => {

    const {username} = useParams();
    console.log(username)

return(
    <>
    <DisplayResults username={username}/>
    </>
)
}
