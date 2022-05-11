import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import * as Pages from './pages';

import './styles/app.css';

function App() {
  return (
    <div id='app'>
      <NavBar />
      <main>
            <Routes>
              <Route path="/" element={<Pages.Search />} />
              {/* <Route path="/:username" element={<Pages.UserInfo />}/> */}
            </Routes>
      </main>
    </div>
  );
}

export default App;