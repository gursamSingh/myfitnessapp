import React, { useEffect } from "react";
import Logout from "../components/Logout";
import HomeHeader from "../components/HomeHeader";
import axios from "axios";
import CaloriesCard from "../components/CaloriesCard";
import ExerciseCard from "../components/ExerciseCard";
import WaterCardV1 from "../components/WaterCardV1";

const Home = () => {
  return (
    <div className="w-full h-full">
      <HomeHeader></HomeHeader>
      <WaterCardV1></WaterCardV1>
    </div>
  );
};

export default Home;
