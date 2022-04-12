import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import {AiOutlineStar, AiOutlineFork} from 'react-icons/ai';
import {VscIssues, VscGitPullRequest } from 'react-icons/vsc';
import './style.css';


export const Home = () => 
(
    <div className="container">
       <div className='row'>
            <h3>Name</h3>
            <p>description</p>
            <div className="icon">
                <span>tech</span>
                <span><AiOutlineStar />1</span>
                <span><AiOutlineFork />2</span>
                <span><VscIssues />0</span>
                <span><VscGitPullRequest />3</span>
                <span>Udpated</span>
            </div>
       </div>
       <div className='row'>
            <h3>Name</h3>
            <p>description</p>
            <div className="icon">
                <span>tech</span>
                <span>star</span>
                <span>fork</span>
                <span>issues</span>
                <span>pull request</span>
                <span>Udpated</span>
            </div>
       </div>
       <div className='row'>
            <h3>Name</h3>
            <p>description</p>
            <div className="icon">
                <span>tech</span>
                <span>star</span>
                <span>fork</span>
                <span>issues</span>
                <span>pull request</span>
                <span>Udpated</span>
            </div>
       </div>
       <div className='row'>
            <h3>Name</h3>
            <p>description</p>
            <div className="icon">
                <span>tech</span>
                <span>star</span>
                <span>fork</span>
                <span>issues</span>
                <span>pull request</span>
                <span>Udpated</span>
            </div>
       </div>
       <div className='row'>
            <h3>Name</h3>
            <p>description</p>
            <div className="icon">
                <span>tech</span>
                <span>star</span>
                <span>fork</span>
                <span>issues</span>
                <span>pull request</span>
                <span>Udpated</span>
            </div>
       </div>
  </div>
)
