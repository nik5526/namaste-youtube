import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Sidebar = ()=>{

    const  isMenuOpen = useSelector((store) => store.app.isMenuOpen );

    //this type of coding is called Early Return Pattern.
    if(!isMenuOpen) return null;

    return <div className="shadow-lg mr-2 w-52 h-screen sticky top-0 flex-shrink-0 ">
        <ul className="flex flex-col text-l font-bold pl-5 py-5 gap-3">
            <li className="hover:rounded-lg hover:shadow-lg hover:bg-gray-200 cursor-pointer p-1"> <Link to={"/"}>Home</Link></li>
            <li className="hover:rounded-lg hover:shadow-lg hover:bg-gray-200 cursor-pointer p-1">Shorts</li>
            <li className="hover:rounded-lg hover:shadow-lg hover:bg-gray-200 cursor-pointer p-1">Videos</li>
            <li className="hover:rounded-lg hover:shadow-lg hover:bg-gray-200 cursor-pointer p-1">Live</li>
        </ul>
        <h1 className="text-xl font-bold pl-5">Subscriptions</h1>
        <ul className="flex flex-col text-l font-bold pl-5 ">
            <li className="hover:rounded-lg hover:shadow-lg hover:bg-gray-200 cursor-pointer p-1">Gameing</li>
            <li className="hover:rounded-lg hover:shadow-lg hover:bg-gray-200 cursor-pointer p-1">Music</li>
            <li className="hover:rounded-lg hover:shadow-lg hover:bg-gray-200 cursor-pointer p-1">Sports</li>
            <li className="hover:rounded-lg hover:shadow-lg hover:bg-gray-200 cursor-pointer p-1">Movies</li>
        </ul>
        <h1 className="text-xl font-bold pl-5 pt-5">Watch Later</h1>
        <ul className="flex flex-col text-l font-bold pl-5 ">
            <li className="hover:rounded-lg hover:shadow-lg hover:bg-gray-200 cursor-pointer p-1">Gameing</li>
            <li className="hover:rounded-lg hover:shadow-lg hover:bg-gray-200 cursor-pointer p-1">Music</li>
            <li className="hover:rounded-lg hover:shadow-lg hover:bg-gray-200 cursor-pointer p-1">Sports</li>
            <li className="hover:rounded-lg hover:shadow-lg hover:bg-gray-200 cursor-pointer p-1">Movies</li>
        </ul>
    </div>;
}


export default Sidebar;