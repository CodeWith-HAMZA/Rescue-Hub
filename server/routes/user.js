// user.js - Routes for user authentication and profile management

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user"); // Assuming your User model is exported from UserModel.js
const { onBoarded, login, register } = require("../controllers/auth");
const auth = require("../middlewares/auth");
const { getProfile } = require("../controllers/user");

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Onboarding route
router.put("/onboard", auth, onBoarded);
router.get("/profile", auth, getProfile);
router.get("/n", auth, (req, res) => {
  return res.json({ user: req.user });
});

module.exports = router;
