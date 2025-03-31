// This file has the user routes

const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const { route } = require("../app");

// THis route is for registering the user
router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 characters long "),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First Name must be 6 characters long"),
    body("userDetails.goal").notEmpty().withMessage("Goal must not be empty"),
    body("userDetails.barriers")
      .notEmpty()
      .withMessage("Barriers must not be empty"),
    body("userDetails.activityLevel")
      .notEmpty()
      .withMessage("Activity level not be empty"),
    body("userDetails.gender")
      .notEmpty()
      .withMessage("Gender must not be empty"),
    body("userDetails.dateOfBirth")
      .notEmpty()
      .withMessage("Date Of Birth must not be empty"),
    body("userDetails.height")
      .notEmpty()
      .withMessage("Height must not be empty"),
    body("userDetails.weight")
      .notEmpty()
      .withMessage("Weight must not be empty"),
    body("userDetails.goalWeight")
      .notEmpty()
      .withMessage("Goal weight must not be empty"),
    body("userDetails.weeklyGoal")
      .notEmpty()
      .withMessage("Weekly goal must not be empty"),
  ],
  userController.signupUser
);

// THis route is for user login

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 character long"),
  ],
  userController.loginUser
);

module.exports = router;
