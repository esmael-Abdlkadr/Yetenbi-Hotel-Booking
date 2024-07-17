import Logo from "@/component/Logo";
import {
    HiMiniSquares2X2, HiChevronDown, HiBriefcase, HiChevronRight,
    HiHome, HiMiniChartBarSquare, HiMiniUser, HiCurrencyDollar, HiChatBubbleOvalLeft, HiMiniWrenchScrewdriver
} from "react-icons/hi2";


import {Link} from "react-router-dom";
import {useState} from "react";
interface ExpandState {
    [key: string]: boolean;
}
const  Sidebar=()=>{
    const[isExpand,setIsExpand]=useState<ExpandState>({})
    const toggleLinks = (event: React.MouseEvent<SVGElement>) => {
        // Example: toggling based on the presence of a specific icon
        const sectionId = event.currentTarget.getAttribute('data-section-id') || 'defaultSection';
        setIsExpand(prevState => ({ ...prevState, [sectionId]: !prevState[sectionId] }));
    };
    return (<div>
        <nav className={"bg-[#0f172a] shadow-lg h-screen fixed top-0   " +
            "left-0 min-w-[300px] py-6 px-4   text-[#94a3b8] font-[sans-serif] overflow-auto "}>
            <Logo/>
            <div className={"mt-8"}>
                <div>
                    <Link to={"/"} className={"   flex items-center  gap-4" +
                        "  hover:text-[#0c4a6e] transition-all" +
                        "   hover:bg-[#efefef] rounded-md px-4 py-3   font-semibold"}>
                        <HiMiniSquares2X2 size={25}/>
                        <span>Dashboard</span>
                    </Link>

                </div>

            </div>
            {/*    ----2*/}
            <div className={"mt-6"}>
                <div
                    className={" flex items-center " +
                        "  transition-all  " +
                        "rounded-md px-4 py-3 hover:text-[#0c4a6e]    hover:bg-[#efefef]"}>
                    <div className="flex items-center gap-4 flex-grow  font-semibold">
                        <HiBriefcase size={25}/>
                        <span>Bookings</span>
                    </div>
                    <div className="flex justify-end flex-grow">
                        {isExpand['bookings'] ?
                            <HiChevronDown size={25} data-section-id="bookings" onClick={toggleLinks}/>
                            : <HiChevronRight size={25} data-section-id="bookings" onClick={toggleLinks}/>
                        }
                    </div>
                </div>
                {isExpand['bookings'] && <div className={"flex flex-col gap-4 text-[#cbd5e1] pl-8 mt-4"}>
                    <Link to={""}>All Booking</Link>
                    <Link to={""}>Add Booking</Link>
                    <Link to={""}>Edit Booking</Link>
                </div>
                }
            </div>
            {/*    3*/}
            <div className={"mt-6"}>

                <div
                    className={" flex items-center" +
                        "  transition-all text-sm hover:text-[#0c4a6e] hover:bg-[#efefef] " +
                        "rounded-md px-4 py-3"}>
                    <div className="flex items-center gap-4 flex-grow  font-semibold">
                        <HiHome size={25}/>
                        <span>Rooms</span>
                    </div>
                    <div className="flex justify-end flex-grow">
                        {isExpand["room"] ? <HiChevronDown size={25} data-section-id={"room"} onClick={toggleLinks}/>
                            : <HiChevronRight size={25} data-section-id={"room"} onClick={toggleLinks}/>}

                    </div>
                </div>
                {isExpand["room"] && <div className={"flex flex-col gap-4  text-[#cbd5e1] pl-8  mt-4"}>
                    <Link to={""}>All Rooms</Link>
                    <Link to={""}>Room Types</Link>


                </div>
                }
            </div>
            {/*    4*/}
            <div className={"mt-6"}>

                <div
                    className={" flex items-center" +
                        "  transition-all text-sm hover:text-[#0c4a6e] hover:bg-[#efefef] " +
                        "rounded-md px-4 py-3"}>
                    <div className="flex items-center gap-4 flex-grow  font-semibold">
                        <HiMiniChartBarSquare size={25}/>
                        <span>Reports</span>
                    </div>
                    <div className="flex justify-end flex-grow">
                        {isExpand["report"] ?
                            <HiChevronDown size={25} data-section-id={"report"} onClick={toggleLinks}/>
                            : <HiChevronRight size={25} data-section-id={"report"} onClick={toggleLinks}/>}

                    </div>
                </div>
                {isExpand["report"] && <div className={"flex flex-col gap-4  text-[#cbd5e1] pl-8  mt-4"}>
                    <Link to={""}>Stocks</Link>
                    <Link to={""}>Expense</Link>
                    <Link to={""}>Bookings</Link>


                </div>
                }
            </div>
            {/*-5*/}
            <div className={"mt-8"}>
                <div>
                    <Link to={"/"} className={"   flex items-center  gap-4" +
                        "  hover:text-[#0c4a6e] transition-all" +
                        "   hover:bg-[#efefef] rounded-md px-4 py-3   font-semibold"}>
                        <HiMiniUser size={25}/>
                        <span>Customers</span>
                    </Link>

                </div>

            </div>  {/*-8*/}
            <div className={"mt-8"}>
                <div>
                    <Link to={"/"} className={"   flex items-center  gap-4" +
                        "  hover:text-[#0c4a6e] transition-all" +
                        "   hover:bg-[#efefef] rounded-md px-4 py-3   font-semibold"}>
                        < HiMiniWrenchScrewdriver size={25}/>
                        <span>Setting</span>
                    </Link>

                </div>

            </div>
        </nav>

    </div>)
}
export default Sidebar