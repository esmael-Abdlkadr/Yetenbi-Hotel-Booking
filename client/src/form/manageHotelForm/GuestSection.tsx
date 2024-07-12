import { Label } from "flowbite-react";
import { useFormContext } from "react-hook-form";
import { hotelFormData } from "./ManageHotelForm";

const AdultChildSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<hotelFormData>();
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-700  mb-3">Add Guests</h1>
      <div className="bg-slate-400  w-full   rounded-lg  flex items-center  justify-evenly   ">
        <div className=" grid grid-cols-2  p-6  gap-10">
          <div className="flex flex-col gap-2">
            <Label>Adult</Label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              min={1}
              {...register("adultCount", {
                required: "This field is required",
              })}
            />
            {errors.adultCount && (
              <span className="text-red-500">{errors.adultCount.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label>Child</Label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              min={0}
              {...register("childCount")}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AdultChildSection;
