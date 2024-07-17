import {useSidebarContext} from "@/contexts/SidebarContext";

const DashboardHome=()=>{
    const{isCollapsed}=useSidebarContext()
    return(

        <div style={{marginLeft:isCollapsed?"80px":"300px"}} className={"bg-[#e2e8f0]"}>
        <div className={"w-full  h-[70px]  bg-red-white  shadow"}></div>
        </div>

    )

}
export default DashboardHome;