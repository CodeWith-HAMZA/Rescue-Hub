// user.js - Routes for user authentication and profile management

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user"); // Assuming your User model is exported from UserModel.js
const { onBoarded, login, register } = require("../controllers/auth");
const auth = require("../middlewares/auth");
const { getProfile } = require("../controllers/user");
const Application = require("../models/applications");

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);
router.get("/me", auth, (req, res) => res.json(req.user));

// fetching all users from the db with their applications in sequelize
router.get("/all", async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Application,
          // attributes: ["id", "username", "email"], // Specify the user attributes you want to include
          as: "applications",
        },
      ],
    });
    return res.json(users);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

// change onBaorded to '-1'
router.put("/onboard-status/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId);
    if (user.onBoarded == "-1") {
      user.onBoarded = "0";
      await user.save();
      return res.json({ msg: "Onboarding status updated" });
    }
    user.onBoarded = "-1";
    await user.save();
    return res.json({ msg: "Onboarding status updated" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

// Onboarding route
router.put("/onboard", auth, onBoarded);
router.get("/profile", auth, getProfile);
router.get("/n", auth, (req, res) => {
  return res.json({ user: req.user });
});

module.exports = router;
