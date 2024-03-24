const Joi = require("joi");
const { Schema, model } = require("mongoose");
Joi.objectId = require("joi-objectid")(Joi);

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      default: null,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("user", userSchema);

const userSignupShema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number(),
  birthdate: Joi.date().required(),
  password: Joi.string().required(),
  admin: Joi.boolean(),
});

const userSigninShema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const userUpdateStatusSchema = Joi.object({
  admin: Joi.boolean().required(),
});

const userIdSchema = Joi.object({
  id: Joi.objectId().required(),
});

module.exports = {
  User,
  userSignupShema,
  userSigninShema,
  userIdSchema,
  userUpdateStatusSchema,
};
