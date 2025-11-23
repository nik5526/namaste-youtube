import React from "react";
import Sidebar from "./Sidebar";
import MainBody from "./mainBody";

const Body = ()=>{
    return <div className="flex">
        <Sidebar/>
        <MainBody/>
    </div>
}

export default Body;