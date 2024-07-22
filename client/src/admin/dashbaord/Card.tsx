import { HiOutlineArrowLongDown } from "react-icons/hi2";
const Card=({title,amount,decrease,smallTitle1,smallTitle2, smallValue1,smallValue2})=>{
    return (<div
        className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm
        rounded-lg font-sans overflow-hidden mx-auto mt-4">
        <div className="p-6">
            <h3 className="text-xl text-slate-600 font-semibold">{title}</h3>
            <div className={"flex gap-4 items-center"}>
                <p className="mt-2 text-2xl text-gray-500 leading-relaxed">{amount}</p>
                <p className={"text-red-600 flex items-center gap-2 "}>{decrease && <HiOutlineArrowLongDown/>}<span>{decrease}</span></p>
            </div>

            <div className={"grid grid-cols-2 gap-4"}>
                <p className={"uppercase text-xs text-[#64748b]"}>{smallTitle1}</p>
                <p className={"uppercase text-xs text-[#64748b]"}>{smallTitle2}</p>
                <p className={"text-[#475569]"}>{smallValue1}</p>
                <p className={"text-[#475569]"}>{smallValue2}</p>
            </div>
        </div>
    </div>)
}
export default Card