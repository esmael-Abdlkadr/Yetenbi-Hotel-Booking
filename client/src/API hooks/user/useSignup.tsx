import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/userAPI.ts";
import { useNavigate } from "react-router-dom";

function UseSignup() {
  const navigate = useNavigate();
  const { mutateAsync, isError } = useMutation({
    mutationFn: signup,
    mutationKey: ["user"],
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      navigate("/");
      console.log(data);
    },
  });
  return { mutateAsync, isError };
}

export default UseSignup;
