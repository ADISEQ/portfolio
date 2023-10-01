import { Calculator, Home, Wallet } from "lucide-react";
import Sidebar, { SidebarItem } from "../components/Sidebar";


const Dashboard = () => {
    return ( 
        <Sidebar >
            <SidebarItem 
              name="Strona główna"
              icon={<Home size={25}/>}
              active
            />
            <SidebarItem 
              name="Wydatki"
              icon={<Wallet size={25}/>}
            />
            <SidebarItem 
              name="Kalulator"
              icon={<Calculator size={25}/>}
            />
        </Sidebar>
     );
}
 
export default Dashboard;