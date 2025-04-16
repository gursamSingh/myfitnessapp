// THis is a services file which will connect / work with other services like Mongodb, or any other API's

const userModel = require("../models/user.model");

// First we need to create a user (registerUser)

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
  goal,
  barriers,
  activityLevel,
  gender,
  dateOfBirth,
  height,
  weight,
  goalWeight,
}) => {
  // Check if the input that the function got is correct
  if (
    !firstname ||
    !email ||
    !password ||
    !goal ||
    !barriers ||
    !activityLevel ||
    !gender ||
    !dateOfBirth ||
    !height ||
    !weight ||
    !goalWeight
  ) {
    throw new Error("All the fields are required");
  }

  // Now we will create a new user when the inputs are correct

  const user = userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    userDetails: {
      goal,
      barriers,
      activityLevel,
      gender,
      dateOfBirth,
      height,
      weight,
      goalWeight,
    },
  });

  //   Now the user created is returned
  return user;
};
