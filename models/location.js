const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const locationSchema = new Schema({
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
  street: String,
  city: String,
  state: String,
  country: String,
});

module.exports = mongoose.model("Location", locationSchema);
