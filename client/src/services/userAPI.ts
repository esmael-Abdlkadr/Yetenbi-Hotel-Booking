import axios, { AxiosError } from "axios";
import { signupFormData } from "../page/Signup.tsx";
import { toast } from "react-hot-toast";

interface loginData {
  emailOrPhone: string;
  password: string;
}
interface ResponseData {
  message: string;
}
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//signup user.
export const signup = async (data: signupFormData) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/v1/auth/signup`, data, {
      withCredentials: true,
    });
    // check if status code is in 200 ranges.
    if (res.status >= 200 && res.status < 300) {
      const resData = res.data;

      // store token on local storage.
      localStorage.setItem("token", resData.data.token);
      //   save user in local storage.
      localStorage.setItem("user", JSON.stringify(resData.data.newUser));
      toast.success(resData.message);
      return resData;
    }
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
export const login = async (data: loginData) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/v1/auth/login`, data);

    if (res.status >= 200 && res.status < 300) {
      const resData = res.data;

      // store token on local storage.
      localStorage.setItem("token", resData.data.token);
      //   save user in local storage.
      localStorage.setItem("user", JSON.stringify(resData.data.user));
      toast.success(resData.message);
      return resData;
    }
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
    const res = await axios.post(`${API_BASE_URL}/api/v1/auth/logout`);
    if (res.status >= 200 && res.status < 300) {
      toast.success(res.data.message);
    } else {
      throw new Error("Logout failed");
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      const responseData = axiosError.response.data as ResponseData;
      toast.error(responseData.message);
    } else {
      toast.error("Something went wrong");
    }
  } finally {
    // remove user and token from local storage
    // regardless of server request is correct or not.
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
};
