// This file has the user routes

const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const { route } = require("../app");

// THis route is for registering the user
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 characters long "),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First Name must be 6 characters long"),
  ],
  userController.registerUser
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
