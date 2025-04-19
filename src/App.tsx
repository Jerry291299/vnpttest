import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './layout/Home';
import Tintuc from './Components/tintuc';
import Internet from './Components/internet';
import Tv from './Components/tv';


function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/tin-tuc" element={<Tintuc />}></Route>
  <Route path="/internet" element={<Internet />}></Route>
  <Route path="/tv" element={<Tv />}></Route>

  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
