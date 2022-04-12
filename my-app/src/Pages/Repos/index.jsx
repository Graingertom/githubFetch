import React from 'react';
import { DisplayResults } from '../../components';

export const Repos = ({user}) => {
console.log(user)
return(
    <>
    <h1>Your Repos!</h1>
    <DisplayResults user={user} />
    </>
)
}
