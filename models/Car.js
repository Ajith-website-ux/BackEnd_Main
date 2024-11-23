const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  pricePerDay: { type: Number, required: true },
  image: { type: String, required: true },
  availability: { type: Boolean, default: true },
});

module.exports = mongoose.model("Car", carSchema);
