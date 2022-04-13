import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import { VscIssues } from 'react-icons/vsc';
import './style.css';

export const DisplayResults = ({username}) => {

    const [userData, setUserData] = useState();

    useEffect(() => {
    const userFetch = async () => {
        try {
            let { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
            console.log(data)
            setUserData(data)
        } catch (error) {
            console.log(error)
        }
    }
    userFetch()
}, [username])

    console.log(userData)

    return (
        <>
            <h1>{username}'s Repos</h1>
            { userData &&
                userData.map((user, index) => (
            <div key={index} className='container'>            
            <div className='row'>
                <h3>{user.name}</h3>
                <p>{user.description}</p>
                <div className="icon">
                    <span><AiOutlineStar />{user.stargazers_count}</span>
                    <span><AiOutlineFork />{user.forks_count}</span>
                    <span><VscIssues />{user.open_issues_count}</span>
                    <span>{user.updated_at.replaceAll('T' , ' ').replaceAll('Z', ' ')}</span>
                </div>
                </div>
            </div>
                ))
                }
        </>
    )
}
