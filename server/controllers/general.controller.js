// Using the User model ("users collection") in the general.controller.js
const User = require("../models/User.model");

const getUser = async (req, res, next) => {
  try {
    // Get the id from the request params
    const { id } = req.params;
    // Using the id to find the user in the "users" collection
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getUser,
};
