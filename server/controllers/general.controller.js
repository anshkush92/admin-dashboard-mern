// Using the User model ("users collection") in the general.controller.js
const User = require("../models/User.model");
const OverallStat = require("../models/OverallStat.model");
const Transaction = require("../models/Transaction.model");

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

const getDashboardStats = async (req, res, next) => {
  try {
    // Hardcoding values, because we have limited MOCK data
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";

    /* RECENT TRANSACTIONS */ /* Sorts the data backward */
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });
    /* OVERALL STAT*/
    const overallStat = await OverallStat.find({ year: currentYear });
    /* Grabbing several pieces of information that we grabbeed from OVERALL STAT*/
    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    /* Finding the current month stats from the OVERALL STAT */
    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });
    /* Finding the stats of the today */
    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });
    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getUser,
  getDashboardStats,
};
