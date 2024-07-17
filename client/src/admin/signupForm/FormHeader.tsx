import Logo from "@/component/Logo";

const FormHeader=()=>{
    return (
        <div className="max-w-4xl mx-auto font-sans p-6">
        <div className="text-center mb-16">
          <Logo/>
            <h4 className="text-gray-800 text-base font-semibold mt-6">
                Sign up into your account
            </h4>
        </div>
    </div>
    )
}
export default  FormHeader