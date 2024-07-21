import {useSidebarContext} from "@/contexts/SidebarContext";

const DashboardHome=()=>{
    const { isCollapsed } = useSidebarContext();
    return(
        <div style={{ marginLeft: isCollapsed ? "80px" : "300px" }}>
            <h1>Dashboard Home</h1>
        </div>
    )
}
export default DashboardHome;