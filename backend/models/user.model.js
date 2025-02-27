// Here we have defined the schema for the user model (basically how the data for a user will be stored in a database)
// Along with that we have also used additional functionality on userSchema to generate a Authentication JWT Token and Hash & Compare the password (while sign up and sign in)

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be atleast 3 characters long "],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be atleast 3 characters long"],
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, "Email must be atleast  3 character long"],
  },

  password: {
    type: String,
    required: true,
    select: false, //select option set to false for the password field. This ensures that the password field is excluded from query results.
  },
});

// Generates a JWT token for user authentication.
// The token contains the user's unique ID (_id) and expires in 24 hours.
// JWT is used to securely authenticate users without needing to store session data.
// The secret key (JWT_SECRET) is stored in environment variables for security.

// Purpose: Create a JWT token for a logged-in user. Should be: methods (since it generates a token for a specific user).

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

// Hashes a plain text password before storing it in the database.
// Uses bcrypt.hash() with 10 salt rounds to increase security and prevent brute-force attacks.
// The hashed password is stored instead of the plain text version, ensuring user data remains secure.

// Hash a password (before saving it to the database). Should be: statics (so you can call it without a user object).

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

// Compares the entered password with the hashed password stored in the database.
// bcrypt.compare() hashes the entered password and checks if it matches the stored hash.
// Returns 'true' if passwords match, otherwise returns 'false'.
// This ensures that even if passwords are stored as hashes, they can still be validated securely.

// Purpose: Compare the given password with the stored hashed password. Should be: methods (because it compares the password of a specific user).

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
