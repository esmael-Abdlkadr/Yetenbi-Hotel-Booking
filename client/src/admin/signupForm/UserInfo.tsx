

const UserInfo=()=>{
    return (
        <div>
            <h1 className={"text-2xl font-semibold  text-center  mb-5 "}>Personal Information</h1>

    <div className="grid sm:grid-cols-2 gap-8">
        <div>
        <label className="text-gray-800 text-sm mb-2 block">First Name</label>
                <input
                    name="name"
                    type="text"
                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter name"
                />
            </div>
            <div>
                <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
                <input
                    name="lname"
                    type="text"
                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter last name"
                />
            </div>
            <div>
                <label className="text-gray-800 text-sm mb-2 block">Email </label>
                <input
                    name="email"
                    type="text"
                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter email"
                />
            </div>
            <div>
                <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
                <input
                    name="number"
                    type="number"
                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter mobile number"
                />
            </div>
            <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <input
                    name="password"
                    type="password"
                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter password"
                />
            </div>
            <div>
                <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                <input
                    name="cpassword"
                    type="password"
                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter confirm password"
                />
            </div>
        </div>
        </div>
    )
}
export default UserInfo