import React from "react";
import { useState } from "react";

const Form2 = ({ data, setData }) => {
  return (
    <div className="flex items-center justify-center h-full px-4 mt-5 mb-5">
      <div className="w-full max-w-[1000px]">
        <div className="shadow-2xl p-4 rounded-lg bg-white">
          <div className="p-4 flex flex-col gap-2 ">
            <label className="text-lg mt-2">Gender</label>
            <select
              className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
              value={data.gender}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            >
              <option>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Rather Not Say">Rather Not Say</option>
            </select>
            <label className="text-lg mt-2">Date Of Birth</label>
            <input
              value={data.dateOfBirth}
              onChange={(e) =>
                setData({ ...data, dateOfBirth: e.target.value })
              }
              type="date"
              placeholder="Enter Height in Centimeters"
              className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
            />
            <label className="text-lg mt-2">Enter Weight</label>
            <input
              value={data.weight}
              onChange={(e) => setData({ ...data, weight: e.target.value })}
              type="number"
              placeholder="Enter Weight in Kilograms"
              className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
            />

            <label className="text-lg mt-2">Enter Height</label>
            <input
              value={data.height}
              onChange={(e) => setData({ ...data, height: e.target.value })}
              type="number"
              placeholder="Enter Height in Centimeters"
              className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;
