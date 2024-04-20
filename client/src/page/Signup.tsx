import svg from "/booking-accommodation.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import useSignup from "../API hooks/user/useSignup.tsx";
export type signupFormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
};
const Signup = () => {
  const { mutateAsync } = useSignup();
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Please enter your name")
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name can't be longer than 50 characters"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number is not valid"),
    password: yup
      .string()
      .required("password required")
      .min(6, "Password must be at least 6 characters"),
    passwordConfirm: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<signupFormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: signupFormData) => {
    try {
      await mutateAsync(data, {
        onSuccess: () => {
          reset();
        },
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-blue-900 text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${svg})`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Sign up Here
              </h1>
              <p className="text-[12px] text-gray-500">
                Hey enter your details to create your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <form
                className="mx-auto max-w-xs flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your Full Name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-[12px]">
                    {errors.name.message}
                  </p>
                )}

                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 font-semibold">
                    {errors.email.message}
                  </p>
                )}
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="tel"
                  placeholder="Enter your phone"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 font-semibold">
                    {errors.phone.message}
                  </p>
                )}
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 font-semibold">
                    {errors.password.message}
                  </p>
                )}
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password confirm"
                  {...register("passwordConfirm")}
                />
                {errors.passwordConfirm && (
                  <p className="text-red-500 font-semibold">
                    {errors.passwordConfirm.message}
                  </p>
                )}
                <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <Link to={"/login"}>
                    <span className="text-blue-900 font-semibold">Sign in</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
