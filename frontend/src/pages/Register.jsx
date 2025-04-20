import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Form1 from "../components/MutilStepForm/Form1";
import Form2 from "../components/MutilStepForm/Form2";
import Form3 from "../components/MutilStepForm/Form3";
import MultiStepForm from "../components/MultiStepForm";

const Register = () => {
  return (
    <div className="bg-[url(/Users/gursam/DEV/myfitnessapp/frontend/src/assets/register_bg.jpg)]">
      {/* Navbar */}
      <div className="bg-[#0066ee] w-full h-15 flex items-center m-0 pt-4 pb-4 justify-center lg:h-[60px] lg:gap-[48rem]">
        <Link to={"/signup"}>
          <div className="text-white font-sans text-2xl font-semibold p-4">
            myfitness
          </div>
        </Link>
      </div>
      <MultiStepForm></MultiStepForm>
    </div>
  );
};

export default Register;
