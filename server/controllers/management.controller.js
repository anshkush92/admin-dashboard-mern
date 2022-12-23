const User = require("../models/User.model");

const getAdmins = async (req, res, next) => {
  try {
    // Grabbing the information about those users whose role is "admin" without the password
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json({ admins });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getAdmins };
