// import svg from "/booking-accommodation.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import useLogin from "../API hooks/user/useLogin.tsx";

interface formData {
  emailOrPhone: string;
  password: string;
}
function Login() {
  const { mutateAsync } = useLogin();
  const schema = yup.object().shape({
    emailOrPhone: yup
      .string()
      .test(
        "emailOrPhone",
        "Please enter a valid email or phone number",
        (value) =>
          yup.string().email().isValidSync(value) ||
          /^(\+\d{1,3}[- ]?)?\d{10}$/.test(value)
      )
      .required("Please enter an email or phone number"),
    password: yup
      .string()
      .required("Password required")
      .min(6, "Password must be at least 6 characters"),
  });
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: formData) => {
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
            // style={{
            //   backgroundImage: `url(${svg})`,
            // }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Login up Here
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
                  placeholder="Email / Phone number"
                  {...register("emailOrPhone")}
                />
                {errors.emailOrPhone && (
                  <p className="text-red-500 font-semibold">
                    {errors.emailOrPhone.message}
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
                <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span className="ml-3">Log In</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Don't have an account?{" "}
                  <Link to={"/signup"}>
                    <span className="text-blue-900 font-semibold">Sign Up</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
