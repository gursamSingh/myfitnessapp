import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    };
    console.log(email, password);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setWeight("");
    setHeight("");
    setGoalWeight("");
  };
  return (
    <div className="bg-[url(/Users/gursam/DEV/myfitnessapp/frontend/src/assets/register_bg.jpg)]">
      {/* Navbar */}
      <div className="bg-[#0066ee] w-full h-15 flex items-center m-0 pt-4 pb-4 justify-center lg:h-[60px] lg:gap-[48rem]">
        <div className="text-white font-sans text-2xl font-semibold p-4">
          myfitness
        </div>
      </div>

      <div className="flex items-center justify-center h-full px-4 mt-5 mb-5">
        <div className="w-full max-w-[1000px]">
          <div className="shadow-2xl p-4 rounded-t-lg bg-white">
            <h2 className="text-lg font-semibold text-left mt-2">
              Personal Information
            </h2>

            <form
              className="p-4 flex flex-col gap-2 "
              onSubmit={(e) => submitHandler(e)}
            >
              <label className="text-lg mt-2">Full Name</label>
              <div className="flex gap-2">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="First Name"
                  className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
                />
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Last Name"
                  className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
                />
              </div>

              <label className="text-lg mt-2">Email Address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email"
                className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
              />
              <label className="text-lg mt-2">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Password"
                className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
              />

              <label className="text-lg mt-2">Date Of Birth</label>
              <input
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                type="date"
                placeholder="dd/mm/yy"
                className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
              />

              <label className="text-lg mt-2">Gender</label>
              <select className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <label className="text-lg mt-2">Enter Weight</label>
              <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                type="number"
                placeholder="Enter Weight in Kilograms"
                className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
              />

              <label className="text-lg mt-2">Enter Height</label>
              <input
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                type="number"
                placeholder="Enter Height in Centimeters"
                className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
              />

              <label className="text-lg mt-2">Goals</label>
              <select className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base">
                <option value="Lose Weight">Lose Weight</option>
                <option value="Maintain Weight">Maintain Weight</option>
                <option value="Gain Weight">Gain Weight</option>
                <option value="Gain Muscle">Gain Muscle</option>
              </select>

              <label className="text-lg mt-2">Activity Level</label>
              <select className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base">
                <option value="Not Very Active">Not Very Active</option>
                <option value="Lightly Active">Lightly Active</option>
                <option value="Active">Active</option>
                <option value="Very Active">Very Active</option>
              </select>

              <label className="text-lg mt-2">Barriers</label>
              <select className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base">
                <option value="Lack Of Time">Lack Of Time</option>
                <option value="Regimen too hard to follow">
                  Regimen too hard to follow
                </option>
                <option value="Difficult to make food choices">
                  Difficult to make food choices
                </option>
                <option value="Social eating & events">
                  Very Social eating & events
                </option>
                <option value="Food Cravings">Food Cravings</option>
                <option value="Lack Of Progress">Lack Of Progress</option>
              </select>

              <label className="text-lg mt-2">Enter Goal Weight</label>
              <input
                value={goalWeight}
                onChange={(e) => setGoalWeight(e.target.value)}
                type="number"
                placeholder="Enter Weight in Kilograms"
                className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
              />
              <button className="w-full px-6 py-2 font-medium tracking-wide text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 mt-4">
                Continue
              </button>
            </form>
          </div>

          <div className="flex items-center justify-center py-4 text-center bg-gray-200 rounded-b-lg text-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
