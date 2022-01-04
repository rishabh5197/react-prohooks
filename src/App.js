
import './App.css';
import React from 'react';

import Main from './components/MainComponents';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Main />
    </BrowserRouter>
  );
}

export default App;
