const Product = require("../models/Product.model.js");
const ProductStat = require("../models/ProductStat.model.js");

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

module.exports = { getProducts };
