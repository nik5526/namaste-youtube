import React from "react";
import TopButton from "./TopButtons";

const ButtonList = ()=>{
    return (
        <div className="flex">
            <TopButton name="All"/>
            <TopButton name="Sports"/>
            <TopButton name="Gaming"/>
            <TopButton name="Education"/>
            <TopButton name="Songs"/>
            <TopButton name="Science"/>
            <TopButton name="Tech"/>
            <TopButton name="AI"/>
            <TopButton name="Live"/>
            <TopButton name="Prices"/>
            <TopButton name="Mixes"/>
            <TopButton name="e-sports"/>
            <TopButton name="Clash of Clans"/>
            <TopButton name="Music"/>
        </div>
    );
}

export default ButtonList;