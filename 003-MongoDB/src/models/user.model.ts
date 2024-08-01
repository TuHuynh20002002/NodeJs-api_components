import { Schema, model } from "mongoose";

const User = new Schema(
  {
    username: {
      type: String,
      maxLength: 24,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      maxLength: 24,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("users", User);
