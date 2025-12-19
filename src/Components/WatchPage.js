import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeMenu } from "../utilities/sidebarSlice";
import {useSearchParams} from "react-router-dom";
import CommentsContainer from "./commentsContainer";
import LiveComments from "./LiveComments"

const WatchPage = ()=>{

    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v")); if we search by v then it will give the video id.

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
    return (
        //for playing the youtube video you just have to go to youtube copy a embed of any video and replace the with in the src after embed/ there you put  searchParams.get("v") and it will work well load every video on which you will click.
        <div>
            <div className="flex ">
                <div >
                    <iframe className = "w-[1000px] h-[600px] p-2 m-2 rounded-3xl" width="560" height="315" src={"https://www.youtube.com/embed/    " +     searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;     clipboard-write;    encrypted-media; gyroscope; picture-in-picture; web-share"  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></ iframe>
                </div>
                <div className="bg-slate-100 w-full rounded-lg m-2 p-2 border border-gray-500">
                    <LiveComments/>
                </div>
            </div>

            <div>
                <CommentsContainer/>
            </div>
        
        </div>
    );
};

export default WatchPage;