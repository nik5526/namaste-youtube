import React from "react";
import {Youtube_API} from "../utilities/APIkeys";
import {useEffect,useState} from "react";
import VideoCard from "./VideoCard";
import {Link} from "react-router-dom";

const Videos = ()=>{
    const[videos, setVideos] = useState([]);

    useEffect(()=>{
        VideoFetch()
    },[]);

    const VideoFetch = async()=>{
        const data = await fetch(Youtube_API);
        const json = await data.json();
        // console.log(json.items);
        setVideos(json.items);
    }
    return <div className="flex flex-wrap">
        {videos.map((video) => <Link to={"/watch?v=" + video.id}><VideoCard key={video.id} info={video}/></Link>)}
    </div>;
}

export default Videos;