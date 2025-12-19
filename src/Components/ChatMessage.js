import React from "react";
import {User_Icon} from "../utilities/links";

const ChatMessage = ({name,chat})=>{
    return( 
    <div className="flex items-center">
         <img className="w-10 h-10" src={User_Icon} alt="user_icon"/>
         <span className="font-semibold px-2">{name}</span>
         <span>{chat}</span>
    </div>
);
}

export default ChatMessage;