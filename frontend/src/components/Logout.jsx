import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/logout`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("User logged out");
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      console.error("Logout failed", error);
      // Fallback in case logout fails
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <div onClick={logoutHandler} className="cursor-pointer">
      <div>Logout</div>
    </div>
  );
};

export default Logout;
