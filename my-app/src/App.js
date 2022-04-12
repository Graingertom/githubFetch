import React from 'react';
import * as Pages from './Pages'
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
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
        <main>
          <Routes>
              <Route path="/" element={<Layout getUser={userFetch} />}>
                <Route index element={<Pages.Home />} />
                <Route path=":username" element={<Pages.Repos />}>
                </Route>
              </Route>
          </Routes>
        </main>
    </div>
  );
}

export default App;
