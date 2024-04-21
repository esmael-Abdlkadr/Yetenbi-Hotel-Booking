import { useMutation } from "@tanstack/react-query";
import { logout } from "../../services/userAPI";
import { useNavigate } from "react-router-dom";

function UseLogut() {
  const navigate = useNavigate();
  const { mutateAsync } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate("/login");
    },
  });
  return { mutateAsync };
}

export default UseLogut;
