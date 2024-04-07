const { Product } = require("../models/product.js");

const getProducts = async () => {
  const products = await Product.find().populate("owner");
  return products;
};

const createProduct = async (productData) => {
  const product = await Product.create(productData);
  return product;
};

module.exports = {
  getProducts,
  createProduct,
};
