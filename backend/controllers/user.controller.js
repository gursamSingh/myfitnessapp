// The use of controller file here is that it will check for the input coming in and then ask the service to perform a task

const userModel = require("../models/user.model");
const { body } = require("express-validator");
const userService = require("../services/user.service");

// We use validation result for the validations added on the route.
const { validationResult } = require("express-validator");

// This controller function is to register a user
module.exports.signupUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req.body);

  // We have extracted the below from the request
  const { fullname, email, password, userDetails } = req.body;

  // Before creating a user I will need to check also that the using the email a user is not already created
  const isUserAlready = await userModel.findOne({ email });

  if (isUserAlready) {
    return res.status(400).json({ message: "User already exists!" });
  }

  // now we need to hash the password since we cannot store it simply in the db (Security DUH!)
  const hashedPassword = await userModel.hashPassword(password);

  // Now calling the user Service funciton which creates a user in the database (this is the service funciton that basically interacts with the database)
  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    goal: userDetails.goal,
    barriers: userDetails.barriers,
    activityLevel: userDetails.activityLevel,
    gender: userDetails.gender,
    dateOfBirth: userDetails.dateOfBirth,
    height: userDetails.height,
    weight: userDetails.weight,
    goalWeight: userDetails.goalWeight,
    weeklyGoal: userDetails.weeklyGoal,
  });

  // We need the jwt token also since this will be used for the next requests as well
  const token = user.generateAuthToken();

  // Now we finally return the user and the token that is generated
  res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  // Extracting the errors from the validation result
  const errors = validationResult(req);
  // Check if there are any errors or not {since no errors to this loop will not run}

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Extracting the email and the password from the request
  const { email, password } = req.body;

  // check the database and get the user if exists
  const user = await userModel.findOne({ email }).select("+password");

  // check if the user exists (if not exist then null is reaturned which is a falsy value and ! is also a faulsy value so by logic the if block will run)
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Now checking if the password is same as the password saved in db

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = user.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({ token, user });
};
