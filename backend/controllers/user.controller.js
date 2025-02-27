// The use of controller file here is that it will check for the input coming in and then ask the service to perform a task

const userModel = require("../models/user.model");
const { body } = require("express-validator");
const userService = require("../services/user.service");

// We use validation result for the validations added on the route.
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req.body);

  // We have extracted the below from the request
  const { fullname, email, password } = req.body;

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
  });

  // We need the jwt token also since this will be used for the next requests as well
  const token = user.generateAuthToken();

  // Now we finally return the user and the token that is generated
  res.status(201).json({ token, user });
};
