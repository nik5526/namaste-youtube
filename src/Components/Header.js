
import {Hamburger_Logo} from "../utilities/links";
import {Youtube_Logo} from "../utilities/links";
import {Search_Icon} from "../utilities/links";
import {Microphone_Icon} from "../utilities/links"
import {User_Icon} from "../utilities/links"

const Header = ()=>{
    return <div className="flex justify-between shadow-lg">
        <div className="flex m-2 justify-between">
            <img className="w-7 py-3 pr-2" src={Hamburger_Logo} alt="hamburger-logo"/>

            <img className="w-24 pl-2" src={Youtube_Logo} alt="youtube-logo"/>
        </div>
        <div className="flex m-2">
            <input type="text" placeholder="Search" className="border border-black w-96 px-3 py-2 rounded-tl-3xl rounded-bl-3xl"/>

            <button className="w-12 border border-black rounded-br-3xl rounded-tr-3xl bg-[whitesmoke] pr-2 mr-2">
                <img  src={Search_Icon} alt="Search-icon"/>
            </button>

            <img className="w-12 h-12 ml-2 bg-slate-900 rounded-full" src={Microphone_Icon} alt="Microphone-icon"/>
        </div>
        <div className="m-2">
            <img className="w-12" src={User_Icon} alt="user-icon"/>
        </div>
        </div>
}

export default Header;