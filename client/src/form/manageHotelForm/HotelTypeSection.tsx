import { useFormContext } from "react-hook-form";
import { hotelType } from "../../config/hotel_Booking";
import { hotelFormData } from "./ManageHotelForm";
const HotelTypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<hotelFormData>();
  const typeWatch = watch("type");
  return (
    <div className="mt-3">
      <h1 className="text-3xl  mb-3  font-bold">Types</h1>
      <div className="grid grid-cols-5 gap-2">
        {hotelType.map((type) => (
          <div key={type} className="flex items-center gap-2">
            <label
              className={`cursor-pointer  text-sm rounded-full  px-4 py-2  font-semibold  ${
                typeWatch === type ? "bg-blue-300" : "bg-gray-300"
              }`}
            >
              <input
                className="hidden"
                type="radio"
                {...register("type", { required: "This field is required" })}
                value={type}
              />
              <span>{type}</span>
            </label>
          </div>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500  text-sm  font-bold">
          {errors.type.message}
        </span>
      )}
    </div>
  );
};
export default HotelTypeSection;
