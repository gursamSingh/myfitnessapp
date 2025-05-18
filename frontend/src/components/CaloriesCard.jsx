import React from "react";

const CaloriesCard = () => {
  return (
    <div className="mx-7 my-7 h-40 rounded-lg bg-gradient-to-br from-white-100 to-sky-100 relative">
      <div className="absolute px-3 py-3 font- text-md text-blue-500">
        Calories
      </div>
      <div>
        <div className="w-2 ">
          <div className="w-20 h-20 bg-amber-600 rounded-4xl"></div>
        </div>
      </div>
    </div>
  );
};

export default CaloriesCard;
