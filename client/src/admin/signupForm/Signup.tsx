import {Button} from "@/components/ui/button";
import UserInfo from "@/admin/signupForm/UserInfo";
import WorkInfo from "@/admin/signupForm/WorkInfo";
import ProfileSection from "@/admin/signupForm/ProfileSection";
import FormHeader from "@/admin/signupForm/FormHeader";

const AdminSignup=()=>{
    return (<div className={"flex flex-col  gap-10"}>
        <FormHeader/>
        <UserInfo/>
        <WorkInfo/>
        <ProfileSection/>
        <div className="grid w-full max-w-sm items-center">
            <Button className={""}>Submit</Button>
        </div>
    </div>)
}
export default AdminSignup