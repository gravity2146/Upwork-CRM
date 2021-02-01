const mongoose = require("mongoose");

const { Schema } = mongoose;

const companyPhoneSchema = new Schema({
  comapany: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
  countryCode: String,
  areaCode: String,
  phoneNumber: String,
  extention: String,
  type: String,
});

module.exports = mongoose.model("CompanyPhone", companyPhoneSchema);
