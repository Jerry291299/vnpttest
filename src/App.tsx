import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './layout/Home';
import Tintuc from './Components/tintuc';


function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/tin-tuc" element={<Tintuc />}></Route>

  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
