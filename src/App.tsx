import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBusiness from './pages/addBusiness';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/'/>
        <Route path='/addBusiness' element={<AddBusiness/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
