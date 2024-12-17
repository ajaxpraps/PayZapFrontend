import { ButtonComponent } from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="flex justify-between shadow h-14 items-center px-5 font-semibold text-xl">
      <div className="">Welcome to PayZap</div>
      <div className="flex justify-between items-center">
        <div className="pr-4">Hello</div>
        <div className="rounded-full flex justify-center items-center cursor-pointer bg-slate-200 h-11 w-11">
          <div className="">U</div>
        </div>
        <button
          className="ml-5 bg-slate-800 text-white py-2 px-4 hover:bg-gray-800 rounded-lg"
          onClick={logOutHandler}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};
