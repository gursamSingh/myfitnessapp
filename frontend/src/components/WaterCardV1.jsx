import React, { useEffect, useState } from "react";
import waterDroplet from "../assets/water-drop.png";

const WaterCardV1 = () => {
  const [dailyWaterIntake, SetDailyWaterIntake] = useState(0);
  const [time, SetTime] = useState(new Date());

  const updateWaterIntake = (change) => {
    // Set the daily water intake to the previous value and then basis the change -1 or +1 change the value
    SetDailyWaterIntake((prev) => Math.max(0, prev + change));
  };

  useEffect(() => {
    const timer = setInterval(() => SetTime(new Date()), 1000);
    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  return (
    <div className="mx-7 my-7 h-40 rounded-lg bg-gradient-to-br from-white-100 to-sky-100 relative">
      <div>
        <div>
          <div className="absolute px-6 py-6 font-semibold text-xl">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="absolute px-6 py-14 font-base text-sm text-blue-500">
            Current Intake
            {dailyWaterIntake === 0
              ? ""
              : ` ${dailyWaterIntake} glass${dailyWaterIntake > 1 ? "es" : ""}`}
          </div>
          <div className="h-4 w-20 absolute left-60 top-10">
            <img src={waterDroplet} alt="" />
          </div>
          <div className="h-4 w-4 absolute left-75 top-10">
            <img src={waterDroplet} alt="" />
          </div>
        </div>
        <div
          className="w-8 h-8 bg-white absolute bottom-8 left-16 rounded-full text-lg text-center flex justify-center items-center font-semibold cursor-pointer"
          onClick={() => updateWaterIntake(-1)}
        >
          <p className="">-</p>
        </div>
        <div
          className="w-8 h-8 bg-white absolute bottom-8 left-6 rounded-full text-lg text-center flex justify-center items-center font-semibold cursor-pointer"
          onClick={() => updateWaterIntake(+1)}
        >
          <p className="">+</p>
        </div>
      </div>
    </div>
  );
};

export default WaterCardV1;
