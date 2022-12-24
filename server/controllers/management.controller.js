const { mongoose } = require("mongoose");
const User = require("../models/User.model");
const Transaction = require("../models/Transaction.model");

const getAdmins = async (req, res, next) => {
  try {
    // Grabbing the information about those users whose role is "admin" without the password
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json({ admins });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get the performance of a user by using MongoDB aggregation
const getUserPerformance = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Gives us the user with the given id and the affiliateStats
    const userWithStats = await User.aggregate([
      // Match the user with the given id and finding that user with this id ---> "users" collection
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          // Looking in the "affiliatestats" collection
          from: "affiliatestats",
          // Using the "userId" field in the "affiliatestats" collection to match the "_id" field in the "users" collection
          // LocalField because in "users" collection we are running our aggregation
          localField: "_id",
          foreignField: "userId",
          // Now displaying the above captured information as the "affiliateStats"
          as: "affiliateStats",
        },
      },
      // Flattens the array of affiliateStats into a single document
      { $unwind: "$affiliateStats" },
    ]);

    // Getting the sales of the user by using the "affiliateSales" field in the "affiliateStats" collection
    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map((id) => {
        return Transaction.findById(id);
      })
    );

    // Filtering out the null values ----> Means transaction that don't have user are removed
    const filteredSaleTransactions = saleTransactions.filter(
      (transaction) => transaction !== null
    );

    res
      .status(200)
      .json({ user: userWithStats[0], sales: filteredSaleTransactions });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getAdmins, getUserPerformance };
