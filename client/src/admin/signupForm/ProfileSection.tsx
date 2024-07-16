
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

const ProfileSection=()=>{
    return (<div>
        <div className="flex  gap-3  w-full max-w-sm items-center ">
            <Label htmlFor="picture">Picture</Label>

            <Input id="picture" type="file"/>
        </div>
    </div>);
}
export default ProfileSection