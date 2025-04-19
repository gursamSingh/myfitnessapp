import React from "react";
import Form1 from "./MutilStepForm/Form1.jsx";
import Form2 from "./MutilStepForm/Form2.jsx";
import Form3 from "./MutilStepForm/Form3.jsx";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

import { useState } from "react";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Storing the data to send to the components
  const [data, setData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    weight: "",
    height: "",
    goalWeight: "",
    gender: "",
    goal: "",
    activityLevel: "",
    barriers: "",
  });

  const navigate = useNavigate();

  // Logic to display the Form
  const FormDislay = () => {
    if (currentStep === 0) {
      return <Form1 data={data} setData={setData} />;
    } else if (currentStep === 1) {
      return <Form2 data={data} setData={setData} />;
    } else {
      return <Form3 data={data} setData={setData} />;
    }
  };

  const titles = ["Account Details", "Personal Information", "Goals"];

  // Function to send the data to the backend

  const registerUser = async (e) => {
    e.preventDefault();
    const userData = {
      fullname: {
        firstname: data.firstName,
        lastname: data.lastName,
      },
      email: data.email,
      password: data.password,
      userDetails: {
        gender: data.gender,
        dateOfBirth: data.dateOfBirth,
        weight: data.weight,
        height: data.height,
        goalWeight: data.goalWeight,
        barriers: data.barriers,
        weeklyGoal: data.weeklyGoal,
        activityLevel: data.activityLevel,
        goal: data.goal,
      },
    };

    //   Make a request to backend server for registration

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/signup`,
      userData
    );

    if (response.status === 201) {
      const data = response.data;
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setData("");
  };
  return (
    <div>
      <div className="flex items-center justify-center h-full px-4 mt-5 mb-5">
        <div className="w-full max-w-[1000px]">
          <div className="shadow-2xl p-4 rounded-t-lg bg-white">
            <h2 className="text-lg font-semibold text-left mt-2">
              {titles[currentStep]}
            </h2>
            <div className="rounded-lg">{FormDislay()}</div>
            <div className="flex gap-2">
              <button
                className="w-1/2 px-6 py-2 font-medium tracking-wide text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 mt-4"
                onClick={() => {
                  setCurrentStep((currentStep) => currentStep - 1);
                }}
                disabled={currentStep === 0}
              >
                Back
              </button>
              <button
                className="w-1/2 px-6 py-2 font-medium tracking-wide text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 mt-4"
                onClick={(e) => {
                  if (currentStep === titles.length - 1) {
                    registerUser(e);
                  } else {
                    setCurrentStep((currentStep) => currentStep + 1);
                  }
                }}
              >
                {currentStep === titles.length - 1 ? "Submit" : "Continue"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center py-4 text-center bg-gray-200 rounded-b-lg text-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
