import {Button} from "@/components/ui/button";
import UserInfo from "@/admin/signupForm/UserInfo";
import WorkInfo from "@/admin/signupForm/WorkInfo";
import ProfileSection from "@/admin/signupForm/ProfileSection";
import FormHeader from "@/admin/signupForm/FormHeader";

const AdminSignup=()=>{
    return (<div className={"flex flex-col justify-center  gap-10 px-[110px]"}>
        <FormHeader/>
        <UserInfo/>
        <WorkInfo/>
        <ProfileSection/>
        <div className="  grid   max-w-sm  sm:max-w-0   items-center  w-full ">
            <Button className={""}>Submit</Button>
        </div>
    </div>)
}
export default AdminSignup