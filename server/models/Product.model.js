const { model, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);

module.exports = Product;
