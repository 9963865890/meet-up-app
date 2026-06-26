const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  type: String,
  date: String,
  image: String,
  description: String,
  topic: String,
  speakers: [String],
  price: Number,
  venue: String,
  address: String,
  tags: [String]
});

module.exports = mongoose.model("Event", eventSchema);