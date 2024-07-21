import Sidebar from "@/admin/dashbaord/Sidebar";
import DashboardHomeNavbar from "@/admin/dashbaord/DashboardHomeNavbar";
import {SidebarProvider} from "@/contexts/SidebarContext";
import DashboardHome from "@/admin/dashbaord/DashboardHome";

const AdminDahsboard=()=>{
    return(
        <SidebarProvider>
            <div >
                <Sidebar/>
                <DashboardHomeNavbar/>
                <DashboardHome/>
            </div>
        </SidebarProvider>

    )

}
export default AdminDahsboard;