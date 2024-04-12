import Layout from "./Layout/Layout.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home </p>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
