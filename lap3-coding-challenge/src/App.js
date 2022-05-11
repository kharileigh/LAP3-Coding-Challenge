import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Main, Data } from './components';
import './styling/App.css'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:username/:id" element={<Data />}/>
    </Routes>
  );
}

export default App;