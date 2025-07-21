import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuth = localStorage.getItem("authenticated") === "true";
  return isAuth ? <Outlet /> : <Navigate to="/unauthorized" replace />;
};

export default ProtectedRoute;
