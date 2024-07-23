
import Sidebar from "@/admin/dashbaord/Sidebar";
import DashboardHomeNavbar from "@/admin/dashbaord/DashboardHomeNavbar";
import {SidebarProvider} from "@/contexts/SidebarContext";

import {Outlet} from "react-router-dom";

const DashboardLayout = () => {

    return (
          <SidebarProvider>
            <Sidebar />
            <DashboardHomeNavbar />

            <div>
             <Outlet/>
            </div>
          </SidebarProvider>
    );
};

export default DashboardLayout;