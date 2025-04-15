import React from 'react';
import logo from './logo.svg';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './layout/Home';


function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />}></Route>

  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
