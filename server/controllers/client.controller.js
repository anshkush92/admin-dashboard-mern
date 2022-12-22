const Product = require("../models/Product.model.js");
const ProductStat = require("../models/ProductStat.model.js");
const User = require("../models/User.model.js");
const Transaction = require("../models/Transaction.model.js");

const getProducts = async (req, res, next) => {
  try {
    // Getting all the products
    const products = await Product.find();

    // Getting the stats for each product
    const productWithStats = await Promise.all(
      products.map(async (product) => {
        const productStat = await ProductStat.findOne({
          productId: product._id,
        });
        return { ...product._doc, ...productStat._doc };
      })
    );

    // Combines the product and the stats and give us that as a response
    res.status(200).json({ productWithStats });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCustomers = async (req, res, next) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    res.status(200).json({ customers });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Doing the server side Pagination to get the transactions
const getTransactions = async (req, res, next) => {
  try {
    // Grabbing the query parameters, if send nothing, use the default values
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // formatted sort should be like this: {userId: -1}
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: sortParsed.order === "asc" ? 1 : -1,
      };
      return sortFormatted;
    };

    const sortFormatted = Boolean(sort) ? generateSort() : {};

    // Getting the total number of transactions
    const transactions = await Transaction.find({
      // Doing a search with the search value in the mentioned fields
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    // Getting the total number of transactions
    const total = await Transaction.countDocuments({
      name: { $regex: search, $options: "i" },
    });

    // Sending the response to the client for this request
    res.status(200).json({ transactions, total });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getProducts, getCustomers, getTransactions };
