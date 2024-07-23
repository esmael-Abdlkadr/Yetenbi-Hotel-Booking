import {useSidebarContext} from "@/contexts/SidebarContext";

const AllCustomers=()=>{
    const { isCollapsed } = useSidebarContext();
    return(
        <div style={{marginLeft: isCollapsed ? "90px" : "305px"}} className={"mt-6  mr-10"}>
            <h1 className={"text-3xl  font-semibold text-[#64748b]"}>Dashboard overview</h1>
        </div>
    )
}
export default AllCustomers;