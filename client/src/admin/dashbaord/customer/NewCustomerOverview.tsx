import {
    Table,
    TableBody,
    TableCaption,
    TableCell,

    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

import {Link} from "react-router-dom";

const activities = [
    {
        profile: <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>,
        activity: "Keith Jensen requested for room.",
        time: "2hr ago",
    },
    {
        profile: <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>,
        activity: "Keith Jensen requested for room.",
        time: "2hr",

    },
    {
        profile: <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>,
        activity: "Keith Jensen requested for room.",
        time: "2hr",
    },
    {
        profile: <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>,
        activity: "Keith Jensen requested for room.",
        time: "2hr",

    },
    {
        profile: <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>,
        activity: "Keith Jensen requested for room.",
        time: "2hr",

    },

]
const NewCustomerOverview = () => {
    return (
        <div >
            <Table className="border-l border-r border-[#cbd5e1]">
                <TableCaption>List of New Customers</TableCaption>
                <TableHeader>
                    <TableRow className={"border-b"}>
                        <TableHead className={"text-[#334155] text-xl"}>Recent Activities</TableHead>
                        <TableHead><Link to={"/customer"} className={"text-[#3b82f6]"}>view All</Link></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {activities.map((activity, index) => (
                        <TableRow key={index} className={"border-b"}>
                            <TableCell className={"flex gap-4 items-center"}>
                                <div>{activity.profile}</div>
                                <div className={"flex flex-col gap-3 justify-center"}>
                                    <span className={" text-[#334155] text-base "}>{activity.activity}</span>
                                    <span className={"text-[#64748b] text-xs"}>{activity.time}</span>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
export default NewCustomerOverview;