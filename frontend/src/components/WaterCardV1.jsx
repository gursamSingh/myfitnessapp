import React, { useContext, useEffect, useState } from "react";
import waterDroplet from "../assets/water-drop.png";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const WaterCardV1 = () => {
  const { user, setUser } = useContext(UserDataContext);
  const [dailyWaterIntake, SetDailyWaterIntake] = useState(0);
  const [time, SetTime] = useState(new Date());

  const handleIncrement = () => {
    SetDailyWaterIntake((prev) => prev + 1);
  };

  const handleDecrement = () => {
    SetDailyWaterIntake((prev) => Math.max(0, prev - 1));
  };

  // 🟦 Send updated intake to backend whenever it changes
  useEffect(() => {
    const updateWaterIntakeBackend = async () => {
      try {
        await axios.post(
          `${import.meta.env.VITE_BASE_URL}/users/tracker/water`,
          { waterIntake: dailyWaterIntake },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Water intake synced:", dailyWaterIntake);
      } catch (err) {
        console.error("Failed to update water intake:", err.response?.data || err.message);
      }
    };

    updateWaterIntakeBackend();
  }, [dailyWaterIntake]); // ✅ watch the value

  // 🔄 Fetch initial intake & set interval for time
  useEffect(() => {
    const fetchWaterIntake = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/tracker/water`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        SetDailyWaterIntake(response.data.waterIntake || 0);
      } catch (err) {
        console.error("Error fetching water intake:", err.response?.data || err.message);
      }
    };

    fetchWaterIntake();

    const timer = setInterval(() => SetTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-7 my-7 h-40 rounded-lg bg-gradient-to-br from-white-100 to-sky-100 relative shadow-gray-300 shadow-lg">
      <div>
        <div>
          <div className="absolute px-3 py-3 font- text-md text-blue-500">
            Water
          </div>
          <div className="absolute mt-4 px-6 py-6 font-semibold text-xl">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="absolute px-6 py-18 font-base text-sm text-blue-500">
            {dailyWaterIntake === 0
              ? "Hydrate Bro"
              : `Current Intake: ${dailyWaterIntake} glass${
                  dailyWaterIntake > 1 ? "es" : ""
                }`}
          </div>
          <div className="h-4 w-20 absolute left-60 top-12">
            <img src={waterDroplet} alt="water drop" />
          </div>
          <div className="h-4 w-4 absolute left-75 top-10">
            <img src={waterDroplet} alt="water drop" />
          </div>
        </div>

        <div
          className="w-8 h-8 bg-white absolute bottom-6 left-16 rounded-full text-lg text-center flex justify-center items-center font-semibold cursor-pointer"
          onClick={handleDecrement}
        >
          <p>-</p>
        </div>
        <div
          className="w-8 h-8 bg-white absolute bottom-6 left-6 rounded-full text-lg text-center flex justify-center items-center font-semibold cursor-pointer"
          onClick={handleIncrement}
        >
          <p>+</p>
        </div>
      </div>
    </div>
  );
};

export default WaterCardV1;
