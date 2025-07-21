import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DashBoardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    toast.info("Successfully logged out", { autoClose: 3000 });
    
    setTimeout(() => {
      navigate("/enter-pin");
    }, 100);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default DashBoardPage;
