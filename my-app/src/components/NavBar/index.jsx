import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <form className='searchBar'>
                <input type="text"></input>
                <input type="submit" value="Search" />
            </form>
          <NavLink className="home-link" to="/">Home</NavLink>  
        </nav>
    )
}

export default NavBar;
