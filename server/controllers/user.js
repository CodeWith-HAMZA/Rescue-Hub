const User = require("../models/user");

const getProfile = async (req, res) => {
  try {
    // Fetch user profile data based on the authenticated user's ID
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] }, // Exclude sensitive data like password
    });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Return user profile data
    return res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { getProfile };
