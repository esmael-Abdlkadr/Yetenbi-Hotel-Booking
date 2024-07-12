import { useFormContext } from "react-hook-form";
import { hotelFormData } from "./ManageHotelForm";

const UploadImage = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<hotelFormData>();
  return (
    <div>
      <h1 className="text-3xl text-gray-700  mb-3  font-bold">Images</h1>
      <label className="form-control w-full max-w-xs">
        <input
          type="file"
          multiple // to allow multiple file uploads
          accept="image/*" // to allow only images
          {...register("imageurls", {
            validate: (imageurls) => {
              const imageLength = imageurls?.length ?? 0; // fallback to 0 if imageurls is null
              if (imageLength === 0) {
                return "Please upload atleast one image";
              }
              if (imageLength > 5) {
                return "You can upload maximum of 5 images";
              }

              return true;
            },
          })}
          className="file-input file-input-bordered w-full max-w-xs"
        />
      </label>
      {errors.imageurls && (
        <span className="text-red-500  font-bold   text-sm">
          {errors.imageurls.message}
        </span>
      )}
    </div>
  );
};
export default UploadImage;
