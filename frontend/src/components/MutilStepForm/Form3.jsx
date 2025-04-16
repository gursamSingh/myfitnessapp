import React from "react";
import { useState } from "react";

const Form3 = ({ data, setData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [weeklyGoal, setWeeklyGoal] = useState("");
  const [barriers, setBarriers] = useState("");
  return (
    <div className="flex items-center justify-center h-full px-4 mt-5 mb-5">
      <div className="w-full max-w-[1000px]">
        <div className="shadow-2xl p-4 rounded-lg bg-white">
          <div className="p-4 flex flex-col gap-2 ">
            <label className="text-lg mt-2">Goals</label>
            <select
              className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
              value={data.goal}
              onChange={(e) => setData({ ...data, goal: e.target.value })}
            >
              <option>Select Goal</option>
              <option value="Lose Weight">Lose Weight</option>
              <option value="Maintain Weight">Maintain Weight</option>
              <option value="Gain Weight">Gain Weight</option>
              <option value="Gain Muscle">Gain Muscle</option>
            </select>

            <label className="text-lg mt-2">Activity Level</label>
            <select
              className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
              value={data.activityLevel}
              onChange={(e) =>
                setData({ ...data, activityLevel: e.target.value })
              }
            >
              <option>Select Activity Level</option>
              <option value="Not Very Active">Not Very Active</option>
              <option value="Lightly Active">Lightly Active</option>
              <option value="Active">Active</option>
              <option value="Very Active">Very Active</option>
            </select>

            <label className="text-lg mt-2">Barriers</label>
            <select
              className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
              value={data.barriers}
              onChange={(e) => setData({ ...data, barriers: e.target.value })}
            >
              <option>Select Barrier</option>
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
              value={data.goalWeight}
              onChange={(e) => setData({ ...data, goalWeight: e.target.value })}
              type="number"
              placeholder="Enter Weight in Kilograms"
              className="p-2 border border-gray-300 w-full h-10 rounded-sm text-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form3;
