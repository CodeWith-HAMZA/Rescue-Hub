const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const onBoarded = async (req, res) => {
  const { fullName, address, phoneNumber, profilePicture, bio } = req.body;
  const userId = req.user.id; // Assuming you're using authentication middleware to extract user ID from JWT

  try {
    let user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Update user's profile
    user = await User.update(
      {
        fullName,
        address,
        phoneNumber,
        profilePicture,
        bio,
        onBoarded: true,
      },
      { where: { id: userId } }
    );

    return res.json({ msg: "User profile updated successfully" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send({ msg: "Server Error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    let user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        msg: "Invalid credentials (Email Not Found), Register kindly",
      });
    }

    // Validate password
    // const isMatch = password === user?.password;
    // if (!isMatch) {
    //   return res.status(400).json({ msg: "Invalid credentials" });
    // }

    // Generate JWT token
    const payload = {
      user: {
        id: user.id,
        ...user,
      },
    };

    jwt.sign(
      payload,
      "process.env.JWT_SECRET",
      // { expiresIn: "1h" }, // You can adjust the expiration time as needed
      (err, token) => {
        if (err) throw err;
        res.json({ token, user });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const register = async (req, res) => {
  const { username, email } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ where: { email } });
    if (user) {
      // Generate JWT token
      const payload = {
        user: {
          id: user.id,
          ...user,
        },
      };

      jwt.sign(
        payload,
        "process.env.JWT_SECRET",
        //   { expiresIn: "1h" }, // You can adjust the expiration time as needed
        (err, token) => {
          if (err) {
            console.error(err.message);
            return res.status(500).send("Server Error");
          }
          return res.json({ token, user });
        }
      );
      return; // Ensure we return here to prevent further execution
    }

    // Create a new user
    user = await User.create({
      username,
      email,
      password: "using-clerk-auth-instead-this",
    });

    // Generate JWT token
    const payload = {
      user: {
        id: user.id,
        ...user,
      },
    };

    jwt.sign(
      payload,
      "process.env.JWT_SECRET",
      //   { expiresIn: "1h" }, // You can adjust the expiration time as needed
      (err, token) => {
        if (err) {
          console.error(err.message);
          return res.status(500).send("Server Error");
        }
        return res.json({ token, user });
      }
    );
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

module.exports = { onBoarded, login, register };
