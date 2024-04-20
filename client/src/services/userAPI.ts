import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
interface signupData {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}
interface loginData {
  emailOrPhone: string;
  password: string;
}
interface ResponseData {
  message: string;
}
//signup user.
export const signup = async (data: signupData) => {
  console.log("data", data);
  try {
    const res = await axios.post("/api/v1/auth/signup", data);
    toast.success(res.data.message);
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      const responseData = axiosError.response.data as ResponseData;
      toast.error(responseData.message);
    } else {
      toast.error("Something went wrong");
    }
  }
};
//login user.
//login user.
export const login = async (data: loginData) => {
  try {
    const res = await axios.post("/api/v1/auth/login", {
      emailOrPhone: data.emailOrPhone,
      password: data.password,
    });
    toast.success(res.data.message);
    return res.data; // return the response data
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      const responseData = axiosError.response.data as ResponseData;
      toast.error(responseData.message);
    } else {
      toast.error("Something went wrong");
    }
  }
};
//logout user.
export const logout = async () => {
  try {
    const res = await axios.get("/api/v1/auth/logout");
    toast.success(res.data.message);
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      const responseData = axiosError.response.data as ResponseData;
      toast.error(responseData.message);
    } else {
      toast.error("Something went wrong");
    }
  }
};
