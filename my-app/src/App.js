import React from 'react';
import * as Pages from './Pages'
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
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
