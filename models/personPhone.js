const mongoose = require("mongoose");

const { Schema } = mongoose;

const personPhoneSchema = new Schema({
  countryCode: String,
  areaCode: String,
  phoneNumber: String,
  extention: String,
  type: String,
});

module.exports = mongoose.model("PersonPhone", personPhoneSchema);
