import React, { useEffect } from "react";
import Logout from "../components/Logout";
import HomeHeader from "../components/HomeHeader";
import axios from "axios";

const Home = () => {
  return (
    <div className="w-full h-full">
      <HomeHeader></HomeHeader>
    </div>
  );
};

export default Home;

// It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

// useEffect(() => {
//   async function fetchData() {
//     // You can await here
//     const response = await MyAPI.getData(someId);
//     // ...
//   }
//   fetchData();
// }, [someId]); // Or [] if effect doesn't need props or state
