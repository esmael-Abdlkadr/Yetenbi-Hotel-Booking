import Sidebar from "@/admin/dashbaord/Sidebar";
import DashboardHome from "@/admin/dashbaord/DashboardHome";
import {SidebarProvider} from "@/contexts/SidebarContext";

const AdminDahsboard=()=>{
    return(
        <SidebarProvider>
            <div>
                <Sidebar/>
                <DashboardHome/>
            </div>
        </SidebarProvider>

    )

}
export default AdminDahsboard;