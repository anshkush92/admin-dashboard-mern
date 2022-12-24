const { model, Schema, default: mongoose } = require("mongoose");

// The "users" collection will have the following structure
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      min: 2,
      max: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      max: 100,
    },

    password: {
      type: String,
      required: true,
      trim: true,
      min: 2,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

/* 
 In Mongo DB, the collection name will be "users" and it will have the same structure as mentioned in the userSchema, we can use "users" collection by using the "User"
*/

const User = mongoose.model("User", userSchema);

module.exports = User;
