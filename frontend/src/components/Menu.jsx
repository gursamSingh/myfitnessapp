import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const { user } = useContext(UserDataContext);

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
    <div>
      <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white">
        <a href="#" className="mx-auto"></a>

        <div className="flex flex-col items-center mt-6 -mx-2">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 font-medium text-gray-800">
            Hi {user?.fullname?.firstname ? user.fullname.firstname : "Guest"}
          </h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
            {user?.email ? user.email : "user@gmail.com"}
          </p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
              to={"/home"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="mx-4 font-medium">My Home</span>
            </Link>

            <a
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
              <span className="mx-4 font-medium">Goals</span>
            </a>

            {/* Logout item */}
            <div
              onClick={logoutHandler}
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                />
              </svg>
              <span className="mx-4 font-medium">Logout</span>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Menu;
