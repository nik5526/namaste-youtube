import React from "react";
import ChatMessage from "./ChatMessage";
import {useEffect , useState} from "react";
import { useDispatch , useSelector} from "react-redux"; 
import {addMessage} from "../utilities/chatSlice";
import {RandomNameGenerate} from "../utilities/random"
import {RandomMessageGenerate} from "../utilities/random";

const LiveComments  = ()=>{

    const [liveComment,setLiveComment] = useState();
    const dispatch = useDispatch();
    const chatMessages = useSelector((store)=>store.chat.messages);
    //we are using redux to make live api polling we can do it by using use state also.

    useEffect(()=>{
        const i = setInterval(()=>{
            console.log("API Working");

            dispatch(
            addMessage({
                name : RandomNameGenerate(),
                chat : RandomMessageGenerate(30),
            }
        ))
        },2000)

        return ()=>{clearInterval(i)};
    },[]);

    return (

        <div >
            <div className="mb-2 border border-gray-500 rounded-md w-20 p-1 text-gray-500">Live Chat</div>
            <div className="mt-4 h-[480px] overflow-y-scroll border p-2 rounded-md flex flex-col-reverse gap-2">
                {chatMessages.map((c,index)=><ChatMessage key={index} name={c.name} chat={c.chat}/>)}
            </div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log("Message was - ",liveComment);
                dispatch(addMessage({
                    name : "Nikhil Raj",
                    chat : liveComment,
                })
                );
            }}>

                <input className="mt-2 p-[8px] w-3/5 rounded-lg border border-gray-300" type="text" value={liveComment} placeholder="chat..."  onChange={(e)=>setLiveComment(e.target.value)}/> 
                <button className="bg-white m-2 p-[8px] font-semibold rounded-lg border border-gray-300 ">Send</button>
            </form>
        </div>
)
};
 
export default LiveComments;
