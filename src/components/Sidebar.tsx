import {ArrowLeftFromLine, ArrowRightFromLine, MoreVertical} from "lucide-react";
import { createContext, useContext, useState } from "react";


const SidebarContext = createContext(false);
const Sidebar = (props: {children: React.ReactNode}) => {
    
    const [expanded, setExpanded] = useState(true)
    
    return (
        <>
            <div className={`flex flex-col fixed top-0 left-0 h-full bg-slate-900 text-slate-50 duration-150 ${expanded ? 'w-56' : 'w-16'}`}>
                <div className="flex p-4 justify-center">
                    <h1
                      className={`transition-all overflow-hidden font-semibold text-lg ${expanded ? 'w-56' : 'w-0 '}`}
                    >
                      Dashboard
                    </h1>
                    <button
                      onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? <ArrowLeftFromLine /> : <ArrowRightFromLine />}
                    </button>
                </div>
                <SidebarContext.Provider value={expanded}>
                    <ul className="px-3 flex-1">{props.children}</ul>
                </SidebarContext.Provider>
                <div className={`flex px-3 py-4 border-t border-slate-700 items-center justify-between`}>
                    <img src={require('../assets/images/avatars/example.jpg')} alt='avatar' className={`flex-none w-10 h-10 rounded-full mr-2`}/>
                    <div className={`flex flex-initial w-40 mr-4 flex-col overflow-hidden`}>
                        <p className={`font-medium whitespace-nowrap overflow-hidden text-ellipsis`}>Adrian Kolutkiewicz</p>
                        <span className={`text-xs`}>Admin</span>
                    </div>
                    <MoreVertical size={20} className={`flex-none rounded-full cursor-pointer `}/>
                </div>
            </div>

        </>
     );
}

interface SidebarItemProps {
    name: string,
    icon: JSX.Element,
    active?: boolean,
}

export const SidebarItem = (props: SidebarItemProps) => {
    const expanded = useContext(SidebarContext);
    return (
        //<Link to={}>
            <li
              className={
                `relative group flex py-2 px-3 items-center rounded-md cursor-pointer transition-all duration-150 font-medium my-1 ${props.active ? 'bg-slate-800 text-slate-50' : 'hover:bg-slate-800 hover:text-slate-50 text-slate-300'}`
            }
            >
                {props.icon}
                <span className={`overflow-hidden transition-all whitespace-nowrap ${expanded ? 'ml-3 w-52': 'w-0'}`}>{props.name}</span>

                {!expanded && (
                    <div
                      className="absolute left-full rounded-md px-2 py-1 ml-6 bg-slate-900 whitespace-nowrap text-sm opacity-20 invisible transition-all -translate-x-3 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
                    >
                        {props.name}
                    </div>
                )}
            </li>
       // </Link>
     );
}
 
export default Sidebar;