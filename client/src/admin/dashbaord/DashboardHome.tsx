import {useSidebarContext} from "@/contexts/SidebarContext";
import {
    HiMiniUser,
    HiOutlineArrowRightOnRectangle,
    HiOutlineBell,
    HiOutlineBolt,
    HiOutlineCog8Tooth
} from "react-icons/hi2";
import {useState} from "react";
import {HiOutlineChevronDown, HiOutlineUser} from "react-icons/hi";

const DashboardHome=()=>{
    const{isCollapsed}=useSidebarContext()
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen)
    return(

        <div style={{marginLeft:isCollapsed?"80px":"300px"}} className={"bg-[#e2e8f0]"}>
            <div className={"w-full  h-[80px]  bg-red-500"}>
                <div className="relative font-sans w-max mx-auto">
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className="px-6 py-3 rounded text-white text-sm font-semibold border-none outline-none  flex  ietms-center   gap-4  bg-white"
                    >


                        <HiMiniUser size={30} className={"text-white bg-[#2563eb]  rounded-full"}/>
                        <div className={"flex flex-col "}>
                            <span className={"text-xs text-[#3b82f6]"}>Administrator</span>
                            <span className={"text-slate-700  font-semibold"}>Hakuna Matata</span>
                        </div>

                        <HiOutlineChevronDown size={25} color={"white"} className={"mb-3"} />
                    </button>

                    <ul className={`absolute ${isOpen ? 'block' : 'hidden'} 
                    shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto`}>
                        <li className='flex items-center py-3 px-6  bg-[#e2e8f0] hover:bg-blue-50 text-black text-sm cursor-pointer'>
                            <div className="flex flex-wrap items-center justify-center gap-4 cursor-pointer">
                                <img src="https://readymadeui.com/team-1.webp" className="w-12 h-12 rounded-full"
                                     alt="John Doe"/>
                                <div>
                                    <p className="text-[15px] text-gray-800 font-bold">John Doe</p>
                                    <p className="text-xs text-gray-500 mt-0.5">johndoe23@gmail.com</p>
                                </div>
                            </div>

                        </li>
                        <div className="h-[1px] bg-gray-300 w-full"></div>
                        <li className='flex items-center  gap-3 py-3 px-6 hover:bg-blue-50   cursor-pointer text-[#334155]'>
                            <HiOutlineUser size={25}/>
                            view profile
                        </li>
                        <li className='flex items-center gap-3 py-3 px-6 hover:bg-blue-50 text-[#334155]cursor-pointer'>
                            <HiOutlineCog8Tooth size={25}/>
                            Account Setting
                        </li>
                        <li className='flex items-center  gap-3 py-3 px-6   text-[#334155]hover:bg-blue-50 text-black text-sm cursor-pointer'>
                            <HiOutlineBolt size={25}/>
                            Login Activity
                        </li>
                        <div className="h-[1px] bg-gray-300 w-full"></div>
                        <li className='flex items-center  gap-3 py-3 px-6   text-[#334155]hover:bg-blue-50 text-black text-sm cursor-pointer'>
                            <HiOutlineArrowRightOnRectangle size={25}/>
                            Sign out
                        </li>
                    </ul>
                </div>
            </div>
            <HiOutlineBell />

        </div>

    )

}
export default DashboardHome;