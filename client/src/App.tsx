import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//PAGES
import EnterPinPage from "./pages/EnterPinPage";
import DashBoardPage from "./pages/DashBoardPage";
import Unauthorized from "./components/Unauthorized";

const Main = () => {
  return (
    <BrowserRouter>

      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>

        //PUBLIC ROUTES
        <Route path="/" element={<Navigate to="/enter-pin" replace />} />
        <Route path="/enter-pin" element={<EnterPinPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        //PRIVATE ROUTES
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashBoardPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default Main;