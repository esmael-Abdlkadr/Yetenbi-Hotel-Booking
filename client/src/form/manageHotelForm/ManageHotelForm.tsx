import { useForm, FormProvider } from "react-hook-form";
import DetailSection from "./DetailsSection";
import HotelTypeSection from "./HotelTypeSection";
import HotelAminities from "./HotelAmenities";
import AdultChildSection from "./GuestSection";
import UploadImage from "./ImageSections";
export type hotelFormData = {
  name: string;
  city: string;
  description: string;
  pricePerNight: number;
  type: string;
  rating: number;
  amenities: string[];
  imageurls: FileList | null;
  adultCount: number;
  childCount: number;
  location: {
    type: "point";
    coordinates: [number, number];
  };
};
const ManageHotelForm = () => {
  const formMethod = useForm<hotelFormData>();
  const { handleSubmit } = formMethod;
  const onSubmit = (data: hotelFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("city", data.city);
    formData.append("description", data.description);
    formData.append("pricePerNight", data.pricePerNight.toString());
    formData.append("type", data.type);
    formData.append("rating", data.rating.toString());
    data.amenities.forEach((amenity) => formData.append("amenities", amenity));
    // convert the  FileList to  Array  to  work with  array  method.
    if (data.imageurls) {
      Array.from(data.imageurls).forEach((image) => {
        formData.append("imageurls", image);
      });
    }
    formData.append("adultCount", data.adultCount.toString());
    formData.append("childCount", data.childCount.toString());
    formData.append("location", JSON.stringify(data.location));

    console.log(data);
  };
  return (
    <FormProvider {...formMethod}>
      <form className="flex flex-col  gap-10" onSubmit={handleSubmit(onSubmit)}>
        <DetailSection />
        <HotelTypeSection />
        <HotelAminities />
        <AdultChildSection />
        <UploadImage />
        <span className="flex  justify-end">
          <button type="submit" className="btn  btn-primary">
            Save
          </button>
        </span>
      </form>
    </FormProvider>
  );
};
export default ManageHotelForm;
