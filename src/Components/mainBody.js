import React from "react";
import Videos from "./Videos";
import ButtonList from "./ButtonList";


const MainBody = ()=>{
    return <div className="flex-1 ">
        <ButtonList/>
        <Videos/>
    </div>
}
export default MainBody;