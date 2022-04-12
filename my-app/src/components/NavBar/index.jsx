import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = ({getUser}) => {

    const goTo = useNavigate();

    const [ username, setUsername ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        getUser(username);
        goTo(`${username}`)
    }

    const updateInput = e => {
        const input = e.target.value 
        setUsername(input)
    }

    return (
        <nav>
            <form className='searchBar' onSubmit={handleSubmit}>
                <input type="text" onChange={updateInput}></input>
                <input type="submit" value="Search" />
            </form>
          <NavLink className="home-link" to="/">Home</NavLink>  
        </nav>
    )
}

export default NavBar;
