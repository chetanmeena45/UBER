const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", // Changed from "User" to "user" to match model name
    required: true,
  },
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "captain", // Changed from "Captain" to "captain" to match model name
  },
  pickup: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  fare: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    enum: ["pending", "accepted", "ongoing", "completed", "cancelled"],
    default: "pending",
  },

  duration: {
    type: Number,
  },
  distance: {
    type: Number,
  },

  paymentID: {
    type: String,
  },

  orderId: {
    type: String,
  },

  signature: {
    type: String,
  },

  otp: {
    type: String,
    select: false,
    required: true,
  },
});

const rideModel = mongoose.model("ride", rideSchema);
module.exports = rideModel;
