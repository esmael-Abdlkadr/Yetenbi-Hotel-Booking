import { useFormContext } from "react-hook-form";
import { hotelAmenities } from "../../config/hotel_Booking";
import { hotelFormData } from "./ManageHotelForm";
const HotelAminities = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<hotelFormData>();
  return (
    <div>
      <h1 className="text-3xl   font-bold mb-3">Facilities</h1>
      <div className="grid grid-cols-5  gap-3">
        {hotelAmenities.map((amenity) => (
          <div key={amenity} className="form-control">
            <label className=" cursor-pointer flex gap-2 ">
              <input
                type="checkbox"
                className="checkbox"
                {...register("amenities", {
                  validate: (amenities) => {
                    if (amenities && amenities.length > 0) {
                      return true;
                    } else {
                      return "select at least one facility  to continue ";
                    }
                  },
                })}
                value={amenity}
              />
              <span>{amenity}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HotelAminities;
