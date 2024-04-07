const repositories = require("../repositories/product.js");

const getProducts = async () => {
  const product = await repositories.getProducts();
  return product;
};

module.exports = {
  getProducts,
};
