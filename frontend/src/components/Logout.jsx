import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logoutHandler = async () => {
    let response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/users/logout`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      console.log("user logged out");
      localStorage.removeItem("token");
      navigate("/login");
    }
  };
  return (
    <div>
      <div>
        <button
          className="w-1/2 px-6 py-2 font-medium tracking-wide text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 mt-4"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
