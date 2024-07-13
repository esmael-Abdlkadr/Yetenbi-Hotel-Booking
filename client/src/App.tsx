import Layout from "./Layout/Layout.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./page/Signup.tsx";
import { Toaster, ToastOptions } from "react-hot-toast";
import Login from "./page/Login.tsx";
import { useAuthContext } from "./contexts/authContext.tsx";
import AddHotel from "./page/AddHotel.tsx";
import AdminSignup from "./form/admin/AdminSignup.tsx";

const toastOPtion: ToastOptions = {
  duration: 3000,
  style: {
    fontSize: "16px",
    maxWidth: "500px",
    padding: "16px 24px",
    backgroundColor: "#f3f3f3f3",
    color: "#333",
  },
};
function App() {
  const { token } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        {/* admin routes */}
        <Route path={"/admin/signup"} element={<AdminSignup />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
        <Route path="/add-hotel" element={<AddHotel />} />
        {/* {token && (
          <>
            
          </>
        )} */}
        <Route
          path="/"
          element={
            <Layout>
              <p>Home </p>
            </Layout>
          }
        />
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={toastOPtion}
      />
    </BrowserRouter>
  );
}

export default App;
