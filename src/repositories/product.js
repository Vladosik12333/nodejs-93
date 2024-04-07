const { Product } = require("../models/product.js");

const getProducts = async () => {
  const products = await Product.find().populate("owner");
  return products;
};

module.exports = {
  getProducts,
};
