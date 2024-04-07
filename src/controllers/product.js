const services = require("../services/product.js");

const getProducts = async (_, res) => {
  const products = await services.getProducts();
  res.json({
    products,
  });
};

const createProduct = async (req, res) => {
  const product = await services.createProduct(req.body, req.user._id);
  res.json({
    product,
  });
};

module.exports = {
  getProducts,
  createProduct,
};
