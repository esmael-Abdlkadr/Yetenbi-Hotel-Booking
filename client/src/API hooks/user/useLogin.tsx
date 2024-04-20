import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/userAPI";
import { useNavigate } from "react-router-dom";

function UseLogin() {
  const navigate = useNavigate();
  const { mutateAsync, isError } = useMutation({
    mutationFn: login,
    mutationKey: ["user"],
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      // Check if the login was successful before navigating
      if (data.status === "success") {
        navigate("/");
      }
      console.log(data);
    },
  });
  return { mutateAsync, isError };
}

export default UseLogin;
