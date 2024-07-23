import {useSidebarContext} from "@/contexts/SidebarContext";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {HiOutlineCalendarDays,HiOutlineChevronRight,HiOutlineChartBar} from "react-icons/hi2";
import Card from "./Card"
import {CardValue} from "@/admin/dashbaord/CardValue";
import TopFeature from "@/admin/dashbaord/TopFeature";
import BookingChart from "@/admin/dashbaord/BookingChart";
import { HiOutlineArrowSmallUp,HiOutlineArrowSmallDown } from "react-icons/hi2";
import ExspenseChart from "@/admin/dashbaord/ExspenseChart";
import NewCustomerOverview from "@/admin/dashbaord/customer/NewCustomerOverview";
import RecentActivities from "@/admin/dashbaord/RecentActivities";
const DashboardHome=()=>{
    const { isCollapsed } = useSidebarContext();
    return(
        <div style={{ marginLeft: isCollapsed ? "90px" : "305px" }}  className={"mt-6  mr-10"}>
            <div className={"flex gap-4 justify-between  items-center"}>
                <div className={"flex flex-col  gap-4"}>
                    <h1 className={"text-3xl  font-semibold text-[#64748b]"}>Dashboard overview</h1>
                    <p className={"text-[#475569]"}>welcome to Yetenbi Hotels Booking Admin Dashboard</p>
                </div>


                <div className={"flex  gap-5"}>
                    {/*calendar  dropDown*/}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className={"hover:bg-[#475569]"}>
                            <Button variant="outline"> <div className={"flex items-center gap-4  text-[#64748b] hover:text-slate-100 "}><HiOutlineCalendarDays  size={25}/>
                                <span>Report Time frame</span>  <HiOutlineChevronRight  size={25}/></div> </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>choose Time frame</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup >
                                <DropdownMenuRadioItem value="top">Last 30 days</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="bottom">Last 6 months</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Last 1 year</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/*report*/}
                    <Button className={"bg-[#0284c7]  text-slate-100  hover:bg-[#0369a1]"}>
                        <HiOutlineChartBar size={25} />Generate Report
                    </Button>
                </div>


            </div>
        {/*    cards*/}
            <div className={"grid  grid-cols-3 gap-4"}>
                {CardValue.map( card=>(
                    <Card title={card.title} amount={card.amount}
                          decrease={card.decrease} smallTitle1={card.smallTitle1}
                          smallTitle2={card.smallTitle2} smallValue1={card.smallValue1} smallValue2={card.smallValue2}/>))
                }
            </div>
        {/*    package-features*/}
            <div className={"grid grid-cols-2 gap-4"}>
                <div className={"bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full " +
                    "        rounded-lg font-sans overflow-hidden mx-auto mt-4"}>
                    <div className={"flex flex-col gap-3 ml-6"}>
                        <h3 className={"text-xl text-slate-600 font-semibold"}>Sales Revenue
                        </h3>
                        <p className={"text-slate-500"}>In last 30 days revenue from rent.</p>
                    </div>
                    {/*......*/}
                    <div className={"grid grid-cols-3 gap-4 mt-6 ml-6"}>
                        {/*1*/}
                        <p className={"text-slate-400"}>Monthly</p>
                        <p className={"text-slate-400"}>weekly</p>
                        <p className={"text-slate-400"}>Daily(Avg)</p>


                        {/*1*/}
                        <p className={"text-3xl text-slate-600 "}>9.2k</p>
                        <p className={"text-3xl text-slate-600"}>9.2k</p>
                        <p className={"text-3xl text-slate-600"}>9.2k</p>

                        {/*1*/}
                        <p className={"text-[#34d399] text-xs flex gap-2 items-center"}>
                            <HiOutlineArrowSmallUp/> <span>4.5%</span></p>
                        <p className={"text-[#34d399] text-xs flex gap-2 items-center"}>
                            <HiOutlineArrowSmallUp/> <span>4.5%</span></p>
                        <p className={"text-[#34d399] text-xs flex gap-2 items-center"}>
                            <HiOutlineArrowSmallUp/> <span>4.5%</span></p>

                    </div>
                    <TopFeature/>
                </div>
                <div className={"bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full \n" +
             "        rounded-lg font-sans overflow-hidden mx-auto mt-4"}>
             <div className={"flex items-center justify-around gap-4 ml-6 mt-5"}>
                 <h3 className={"text-xl text-slate-600 font-semibold"}>Room Booking Chart
                 </h3>
                 <DropdownMenu>
                     <DropdownMenuTrigger asChild >
                         <Button variant="outline">
                         choose
                         </Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent className="w-56">
                         <DropdownMenuLabel>choose Time frame</DropdownMenuLabel>
                         <DropdownMenuSeparator/>
                         <DropdownMenuRadioGroup>
                             <DropdownMenuRadioItem value="top">7 days</DropdownMenuRadioItem>
                             <DropdownMenuRadioItem value="bottom">15 days</DropdownMenuRadioItem>
                             <DropdownMenuRadioItem value="right">30 days</DropdownMenuRadioItem>
                         </DropdownMenuRadioGroup>
                     </DropdownMenuContent>
                 </DropdownMenu>

             </div>
             <BookingChart/>
         </div>

            </div>
        {/*expense chart*/}
            <div className={"bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full " +
                "        rounded-lg font-sans overflow-hidden mx-auto mt-8"}>
                <div className={"flex flex-col gap-3 ml-6"}>
                    <h3 className={"text-xl text-slate-600 font-semibold"}>Expense vs Income
                    </h3>
                    <p className={"text-slate-500"}>How was your income and Expenses this month.</p>
                </div>
                <div className={"grid grid-cols-2 w-[50%] mt-6 ml-6"}>
                    {/*1*/}
                    <p className={"text-[#0284c7]"}>Income</p>
                    <p className={"text-[#be123c]"}>Exspense</p>

                    {/*1*/}
                    <p className={"text-3xl text-slate-600 "}>9.2k</p>
                    <p className={"text-3xl text-slate-600"}>9.2k</p>
                    {/*1*/}
                    <p className={"text-[#34d399] text-xs flex gap-2 items-center"}>
                        <HiOutlineArrowSmallUp/> <span>4.5%</span></p>
                    <p className={"text-[#34d399] text-xs flex gap-2 items-center"}>
                        <HiOutlineArrowSmallUp/> <span>4.5%</span></p>
                </div>
                <ExspenseChart/>

            </div>
        {/*    customer-chart*/}
            <div className={" grid grid-cols-2 gap-5 mt-6"}>
                <NewCustomerOverview/>
                <RecentActivities/>
            </div>
        </div>


    )
}
export default DashboardHome;