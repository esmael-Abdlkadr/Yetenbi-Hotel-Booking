
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

const WorkInfo=()=>{
    return(<div>

        <h1 className={"text-2xl font-semibold  text-center  mb-5 "}>Work Info</h1>

        <div className={"grid  grid-cols-1  gap:5  md:grid-cols-2 md:gap-x-10  md:gap-y-6"}>


            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="dep">Department</Label>
                <Input  id="dep" placeholder="Departement"/>
            </div>
            {/*    Id.*/}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="id">Employee Id</Label>
                <Input id="id" placeholder="Employee Id"/>
            </div>
        </div>

    </div>
    )
}
export default WorkInfo