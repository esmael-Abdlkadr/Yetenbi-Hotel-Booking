import { useSidebarContext } from "@/contexts/SidebarContext";
import {
    HiMiniUser,
    HiOutlineArrowRightOnRectangle,
    HiOutlineBell,
    HiOutlineBolt,
    HiOutlineCog8Tooth
} from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import { HiOutlineChevronDown, HiOutlineUser } from "react-icons/hi";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,

} from "@/components/ui/dropdown-menu"
const DashboardHomeNavbar = () => {
    const { isCollapsed } = useSidebarContext();
    const [isOpen, setIsOpen] = useState(false);
    const[position,setPosition]=useState("bottom")
    const dropDownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    // Global click event listener to close the dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };
        document.addEventListener("keydown", handleEscapeKey);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, []);

    return (
        <div style={{ marginLeft: isCollapsed ? "80px" : "300px" }} className={"bg-[#e2e8f0]  flex gap-5 justify-between"}>
            <div>
                <h6>Dashboard</h6>
            </div>
            {/*flex-2*/}
            <div className={"flex items-center  gap-4  flex-end"}>
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Language</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Choose Language</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem value="english">English</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="amharic">Amharic</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="french">French</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
                <div className="relative font-sans w-max mx-auto" ref={dropDownRef}>
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className="px-6 py-3 rounded text-white text-sm font-semibold border-none outline-none flex items-center gap-4 bg-white"
                    >
                        <HiMiniUser size={30} className={"text-white bg-[#2563eb] rounded-full"}/>
                        <div className={"flex flex-col"}>
                            <span className={"text-xs text-[#3b82f6]"}>Administrator</span>
                            <span className={"text-slate-700 font-semibold"}>Hakuna Matata</span>
                        </div>
                        <HiOutlineChevronDown size={25} color={"white"} className={"mb-3"}/>
                    </button>

                    <ul className={`absolute ${isOpen ? 'block' : 'hidden'} shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto`}>
                        <li className='flex items-center py-3 px-6 bg-[#e2e8f0] hover:bg-blue-50 text-black text-sm cursor-pointer'>
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
                        <li className='flex items-center gap-3 py-3 px-6 hover:bg-blue-50 cursor-pointer text-[#334155]'>
                            <HiOutlineUser size={25}/>
                            View Profile
                        </li>
                        <li className='flex items-center gap-3 py-3 px-6 hover:bg-blue-50 cursor-pointer text-[#334155]'>
                            <HiOutlineCog8Tooth size={25}/>
                            Account Setting
                        </li>
                        <li className='flex items-center gap-3 py-3 px-6 hover:bg-blue-50 cursor-pointer text-[#334155]'>
                            <HiOutlineBolt size={25}/>
                            Login Activity
                        </li>
                        <div className="h-[1px] bg-gray-300 w-full"></div>
                        <li className='flex items-center gap-3 py-3 px-6 hover:bg-blue-50 cursor-pointer text-[#334155]'>
                            <HiOutlineArrowRightOnRectangle size={25}/>
                            Sign Out
                        </li>
                    </ul>
                </div>
                <div>
                    <HiOutlineBell size={25} className={"mr-4"} color={""}/>
                </div>
            </div>


        </div>
    );
};

export default DashboardHomeNavbar;
