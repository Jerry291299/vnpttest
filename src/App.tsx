import React from 'react';
import logo from './logo.svg';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './layout/Home';
import Register from './Components/user/register';
import Login from './Components/user/login';
import Admin from './layout/Admin';
import Privaterouter from './Components/Privaterouter';
import Add from './Components/admin/add';
import Dashboard from './Components/admin/Dashboard';
import Order from './Components/admin/Order';
import Categories from './Components/admin/Category';
import Addcategory from './Components/admin/Addcategory';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />



  <Route
            path="/admin"
            element={
              <Privaterouter>
                <Admin />
              </Privaterouter>
            }
          >
             <Route path="thongke" element={<Dashboard />} />
            <Route path="add" element={<Add />} />
            {/* <Route path="addNews" element={<AddNews />} /> */}
            <Route path="dashboard" element={<Dashboard />} />
             <Route path="Listcategory" element={<Categories />} />
            <Route path="addcategory" element={<Addcategory />} /> 
            {/* <Route path="users" element={<Users />} /> */}
            <Route path="order" element={<Order />} />
            {/* <Route path="tintuc" element={<DashboardNews />} /> */}
            {/* <Route path="dashboard/update/:id" Component={Update}></Route> */}
            {/* <Route path="dashboard/update/:id" Component={Update}></Route>
            <Route path="dashboard/view/:id" Component={View}></Route> */}
            {/* <Route path="News/updatenews/:id" Component={UpdateNews}></Route> */}

            {/* <Route
              path="Listcategory/updatecategory/:id"
              Component={Updatecategory}
            ></Route> */}
          </Route>





  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
