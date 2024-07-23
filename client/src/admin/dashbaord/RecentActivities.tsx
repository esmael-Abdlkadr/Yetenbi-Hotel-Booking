import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Link} from "react-router-dom";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
const invoices = [
    {
        profile: <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>,
        name: "hakuna Matata",
        email: "haku@gmail.com",
    },
    {
        profile: <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>,
        name: "hakuna Matata",
        email: "haku@gmail.com",

    },
    {
        profile: <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>,
        name: "hakuna Matata",
        email: "haku@gmail.com",

    },
    {
        profile: <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>,
        name: "hakuna Matata",
        email: "haku@gmail.com",

    },
    {
        profile: <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>,
        name: "hakuna Matata",
        email: "haku@gmail.com",

    },

]
const RecentActivities=()=>{
    return(
        <Table className="border-l border-r border-[#cbd5e1]">
            <TableCaption>List of New Customers</TableCaption>
            <TableHeader>
                <TableRow className={"border-b"}>
                    <TableHead className={"text-[#334155] text-xl"}>New Customer</TableHead>
                    <TableHead><Link to={"/customer"} className={"text-[#3b82f6]"}>view All</Link></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((customer, index) => (
                    <TableRow key={index} className={"border-b"}>
                        <TableCell className={"flex gap-4 items-center"}>
                            <div>{customer.profile}</div>
                            <div className={"flex flex-col gap-3 justify-center"}>
                                <span className={"text-lg text-[#334155] font-medium capitalize"}>{customer.name}</span>
                                <span className={"text-[#64748b] text-xs"}>{customer.email}</span>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
export default RecentActivities;