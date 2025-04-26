import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Register from "./pages/Register";
import Logout from "./components/Logout";
import UserContext from "./context/UserContext";

function App() {
  return (
    <UserContext>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </UserContext>
  );
}

export default App;
