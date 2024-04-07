const repositories = require("../repositories/product.js");

const getProducts = async () => {
  const product = await repositories.getProducts();
  return product;
};

const createProduct = async (productData, ownerId) => {
  const productDataWithOwner = { ...productData, owner: ownerId };
  const product = await repositories.createProduct(productDataWithOwner);
  return product;
};

module.exports = {
  getProducts,
  createProduct,
};
