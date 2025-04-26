import React, { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import axios from "axios";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState({
    // email: "",
    // password: "",
    // firstName: "",
    // lastName: "",
    // dateOfBirth: "",
    // weight: "",
    // height: "",
    // goalWeight: "",
    // gender: "",
    // goal: "",
    // activityLevel: "",
    // barriers: "",
  });

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("User Profile:", response.data);
        setUser(response.data); // store in context
      } catch (err) {
        console.error("Error fetching profile", err);
      }
    };

    if (token) getUserProfile();
  }, [token]);

  return (
    <div>
      <UserDataContext.Provider value={{ user, setUser }}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
