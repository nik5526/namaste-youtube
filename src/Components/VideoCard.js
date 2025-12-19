import React from "react";

const VideoCard = ({info})=>{
    if(!info) return null;


    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;

    return (
        <div className="m-1 w-[400px] p-1 hover:shadow-xl hover:scale-[1.02] hover:bg-gray-200 transition-all duration-200 rounded-xl cursor-pointer">
            <img className="w-[360px] h-52 rounded-xl m-3" src={thumbnails?.high?.url} alt="high-thumbnail"/>
            <div className="mx-4 pl-3">
                <h1 className="text-lg font-bold">{title}</h1>
                <h2 className="text-sm">{channelTitle}</h2>
            </div>
                
            <div className="flex mx-4 pl-3 text-sm">
                <p>{statistics?.viewCount} views</p>
                <p>{}</p>
            </div>
        </div>
    );
}

export default VideoCard;