import React from 'react';
import Styled, {createGlobalStyle} from 'styled-components';
import Login from './components/login/Login.js';
import './App.css';
import LandingPage from './components/LandingPage.js';

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
