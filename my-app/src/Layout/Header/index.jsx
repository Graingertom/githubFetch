import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ImGithub } from 'react-icons/im'
import './styles.css'

const Header = ({getUser}) => {

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
            <ImGithub className='gitLogo'/>
            <form className='searchBar' onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for a Github User" onChange={updateInput}></input>
            </form>
          <NavLink to="/">Home</NavLink>  
        </nav>
    )
}

export default Header;
