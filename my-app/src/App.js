import React, { useState } from 'react';
import * as Pages from './Pages'
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import './App.css';
import { DisplayResults } from './components';

function App() {

  const [userData, setUserData ] = useState();

  const userFetch = async (username) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
      const userData = data
      setUserData(userData)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
        <main>
          <Routes>
              <Route path="/" element={<Layout getUser={userFetch} />}>
                <Route index element={<Pages.Home user={userData} />} />
                <Route path=":username" element={<DisplayResults />}>
                </Route>
              </Route>
          </Routes>
        </main>
    </div>
  );
}

export default App;
