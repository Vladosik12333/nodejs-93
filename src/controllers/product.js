const services = require("../services/product.js");

const getProducts = async (_, res) => {
  const products = await services.getProducts();
  res.json({
    products,
  });
};

module.exports = {
  getProducts,
};
