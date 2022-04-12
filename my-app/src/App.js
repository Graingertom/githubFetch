import React from 'react';
import * as Pages from './Pages'
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components'
import './App.css';

function App() {
  const userFetch = async (username) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
      console.log(data)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <NavBar getUser={userFetch}/>
        <main>
          <Routes>
              <Route path="/" element={<Pages.Home />}>
                <Route path=":username" element={<Pages.Repos />}>
                </Route>
              </Route>
          </Routes>
        </main>
    </div>
  );
}

export default App;
