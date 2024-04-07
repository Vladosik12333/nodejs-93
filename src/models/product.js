const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
    stock: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      enum: ["S", "M", "L", "XL"],
      default: "S",
    },
    popularity: {
      type: Number,
      default: 0,
    },
    promo: {
      type: Boolean,
      default: false,
    },
    discount: {
      type: Number,
      default: 0,
    },
    producedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const Product = model("product", productSchema);

module.exports = {
  Product,
};
