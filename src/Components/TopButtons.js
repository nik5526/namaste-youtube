import React from "react";


const TopButtons = ({name})=>{
    return <div className="sticky top-[60px] z-40">
        <h1 className="p-2 px-3 mt-4 m-2 rounded-lg bg-gray-200 font-bold text-sm">{name}</h1>
    </div>;
}

export default TopButtons;