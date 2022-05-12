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
              <Route path="/" element={<Pages.SearchForm />} />
              <Route path="/login" element={<Pages.UserData />}/>
            </Routes>
      </main>
    </div>
  );
}

export default App;