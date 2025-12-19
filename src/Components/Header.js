
import {Hamburger_Logo} from "../utilities/links";
import {Youtube_Logo} from "../utilities/links";
import {Search_Icon} from "../utilities/links";
import {Microphone_Icon} from "../utilities/links"
import {User_Icon} from "../utilities/links"
import {useDispatch} from "react-redux";
import {toggleMenu} from "../utilities/sidebarSlice";
import {useState,useEffect } from "react";
import {Search_Query_API } from "../utilities/links";

const Header = ()=>{

    const [search,setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions , setShowSuggestions] = useState(false);

    useEffect(()=>{
        console.log(search);

        const timer = setTimeout(()=>{SearchApi()},200);

        return(()=>{
            clearTimeout(timer);
        });
    },[search]);

 /**
 * key - i *- render the component useEffect(); 
 *  - start timer = make api call after 200 ms 
 * 
 *  key - ip 
 * - destroy the component(useeffect return method 
 * re-render the component 
 *  useEffec() 
 *  start timer = make api call after 200 ms
 *   
 *  setTimeout(200) - make an AP1 aallafter 200 ms 
 * **/

    const SearchApi = async()=>{
        const data = await fetch(Search_Query_API + search);
        const json  = await data.json();
        setSuggestions(json[1]);
    };

    const dispatch = useDispatch();

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }

    return <div className="flex justify-between shadow-lg sticky top-0 z-50">

        <div className="flex m-2 ml-4 justify-between cursor-pointer" onClick = {()=>
            toggleMenuHandler()
        }>
            <img className="w-7 py-3 pr-2" src={Hamburger_Logo} alt="hamburger-logo"/>

            <img className="w-24 pl-2" src={Youtube_Logo} alt="youtube-logo"/>
        </div>
        
            {/* Search Box with Suggestions */}
        <div className="relative flex items-center">
                
            <input 
                type="text"
                placeholder="Search"
                className="border border-black w-96 h-12 px-3 py-2 rounded-l-3xl"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                onFocus={()=>{setShowSuggestions(true)}}
                onBlur={()=>{setShowSuggestions(false)}}
                //onBlur and onFocus helps us to blur or focus our code , what we do is if we click somewhere else outside the search box then it will remove the suggestions and again if we click on the search box then we can see the suggestions again.
            />

            <button className="w-12 h-12 border border-black rounded-r-3xl bg-gray-100">
                <img src={Search_Icon} alt="Search"/>
            </button>

                {/* 🔽 Suggestion Dropdown */}
            { suggestions.length > 0 && showSuggestions && (
                <div className="absolute top-14 left-0 w-96 bg-white shadow-lg border rounded-xl p-2 m-1">
                    <ul>
                        {suggestions.map((s)=>(
                            <li key={s} className="p-2 hover:bg-gray-100 cursor-pointer">
                            🔍 {s}
                        </li>
                        ))}
                        
                    </ul>
                </div>
            )}

                <img className="w-12 h-12 ml-2 bg-slate-900 rounded-full" src={Microphone_Icon} alt="Microphone-icon"/>
            
        </div>
        <div className="m-2">
            <img className="w-12" src={User_Icon} alt="user-icon"/>
        </div>
        </div>
        
}

export default Header;