import React from "react";
import Sidebar from "./Sidebar";
import {Outlet} from "react-router-dom";

const Body = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />                                           {/* this will keep the header and sidebar fixed       */}
      <div className="flex-1 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};


export default Body;