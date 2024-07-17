

const WorkInfo=()=>{
    return(<div>

        <h1 className={"text-2xl font-semibold  text-center  mb-5 "}>Work Info</h1>

            <div className={"grid sm:grid-cols-2 gap-8"}>


                <div>
                    <label className="text-gray-800 text-sm mb-2 block">Department</label>
                    <input
                        name="department"
                        type="text"
                        className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                        placeholder="Enter Department"
                    />
                </div>
                {/*    Id.*/}
                <div>
                    <label className="text-gray-800 text-sm mb-2 block">Employee Id</label>
                    <input
                        name="id"
                        type="text"
                        className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                        placeholder="Enter Your Id"
                    />
                </div>
            </div>

        </div>
    )
}
export default WorkInfo