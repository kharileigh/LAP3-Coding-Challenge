import React from 'react';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:username/:id" element={<Data />}/>
    </Routes>
  );
}

export default App;