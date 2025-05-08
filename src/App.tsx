import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import { AppContext } from './contexts/app.context';
import Home from './layout/Home';

import PrivateRoute from './Components/PrivateRoute';
import Internet from './Components/internet';
import Tv from './Components/tv';
import TinTuc from './Components/tintuc';
import About from './Components/about';
import './App.css';
import Login from './Components/admin/login';
import Admin from './Components/admin/admin';
import Formdangkyonline from './Components/Formdangkyonline';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    sessionStorage.getItem('isAuthenticated') === 'true'
  );
  const [role, setRole] = useState<'admin' | 'customer'>(
    (sessionStorage.getItem('role') as 'admin' | 'customer') || 'customer'
  );

  useEffect(() => {
    sessionStorage.setItem('isAuthenticated', isAuthenticated.toString());
    sessionStorage.setItem('role', role);
  }, [isAuthenticated, role]);

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, role, setRole }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/tin-tuc" element={<TinTuc />} />
          <Route path="/vnpt" element={<About />} />
          <Route path="/lienhe" element={<Formdangkyonline />} />
          <Route element={<PrivateRoute />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
};

export default App;