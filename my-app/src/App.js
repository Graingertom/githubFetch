import React from 'react';
import * as Pages from './Pages'
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import './App.css';

function App() {

  return (
    <div className="App">
        <main>
          <Routes>
              <Route path="/" element={<Layout />}>
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
