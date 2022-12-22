const OverallStat = require("../models/OverallStat.model.js");

const getSales = async (req, res, next) => {
  try {
    const overallStat = await OverallStat.find();
    res.status(200).json({ overallStat });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = { getSales };
