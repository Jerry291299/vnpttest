import React from "react";

import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Components/admin/Navbar";
type Props = {};

const Admin = (props: Props) => {
  return (
    <>
      <div className="flex">
        <div className="w-[240px] h-screen fixed top-0 left-0 z-50 bg-gray-900">
          <Navbar />
        </div>

        <div className="ml-[280px] w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;