import React from 'react';
import StickyFooter from './Components/StickyFooter';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

const App = () => (
    <div className="App">
    <BrowserRouter>
      <Routes/>
      <StickyFooter/>
    </BrowserRouter>
    </div>
  );

export default App;
