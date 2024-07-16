import  axios,{AxiosError}  from "axios";
import {toast} from "react-hot-toast";
import {hotelFormData} from "../form/manageHotelForm/ManageHotelForm.tsx";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
export const addHotel = async (data: hotelFormData) => {
    try {
        const res = await axios.post(`${API_BASE_URL}/api/v1/hotel`, data, );
        // check if status code is in 200 ranges.
        if (res.status >= 200 && res.status < 300) {
            const resData = res.data;
            toast.success(resData.message);
            return resData;
        }
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
            const responseData = axiosError.response.data
            toast.error(responseData.message);
        }else {
            toast.error("Something went wrong");
        }
    }
};