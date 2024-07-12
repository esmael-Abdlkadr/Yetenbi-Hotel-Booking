import { useFormContext } from "react-hook-form";
import { Label, TextInput } from "flowbite-react";
import { hotelFormData } from "./ManageHotelForm";

const DetailSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<hotelFormData>();
  return (
    <form className="flex max-w-md flex-col gap-4">
      <h1 className="text-3xl  font-bold  text-slate-800  ">Add Hotel Here</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="name" />
        </div>
        <TextInput
          id="name"
          placeholder="Enter Hotel Name"
          {...register("name", { required: "Hotel  Name is required:(" })}
        />
        {errors.name && (
          <>
            <p className="text-red-500 text-sm  font-bold">
              {errors.name.message}
            </p>
          </>
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="City" value="city" />
        </div>
        <TextInput
          id="city"
          placeholder="Enter City Name"
          {...register("city", { required: "City Name is required(:" })}
        />
        {errors.city && (
          <p className="text-red-500 text-sm  font-bold">
            {errors.city.message}
          </p>
        )}
      </div>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="description" value="Description" />
        </div>
        <textarea
          placeholder="description"
          className="textarea textarea-bordered textarea-lg w-full "
          {...register("description", {
            required: "Some description about Hotel required",
          })}
          rows={4}
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-sm  font-bold">
            {errors.description.message}
          </p>
        )}
        <div className=" block sm:flex   items-center gap-5">
          <div className="flex flex-col gap-2">
            <Label>Price per per Night</Label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              min={1}
              {...register("pricePerNight", { required: "price is required" })}
            />
            {errors.pricePerNight && (
              <p className="text-red-500 text-sm  font-bold">
                {errors.pricePerNight.message}
              </p>
            )}
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label"></div>
              <select
                className="select select-bordered"
                {...register("rating")}
              >
                <option disabled selected>
                  Rating of Star
                </option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num}>{num}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DetailSection;
