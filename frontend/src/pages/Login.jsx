import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Login = () => {
  const { user, setUser } = useContext(UserDataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    console.log("submit  handler started");
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    // Implement the login logic to send a request & store the token in the local storage
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    console.log(response.status);
    if (response.status === 200) {
      const data = response.data;
      // Setting the user in the context
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />

      <div className="flex items-center justify-center h-full px-4">
        <div className="w-full max-w-[576px]">
          <div className="shadow-2xl p-4 rounded-t-lg bg-white">
            <h2 className="text-lg font-semibold text-center mt-2">
              Member Login
            </h2>

            <form className="p-4 flex flex-col gap-2" onSubmit={submitHandler}>
              <label className="text-lg mt-2">Email Address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
              />

              <label className="text-lg mt-2">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
              />

              <button className="w-full px-6 py-2 font-medium tracking-wide text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 mt-4">
                Login
              </button>
            </form>
          </div>

          <div className="flex items-center justify-center py-4 text-center bg-gray-200 rounded-b-lg text-sm">
            <p>Not a member yet?</p>
            <Link to="/register" className="ml-1 text-blue-600">
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
