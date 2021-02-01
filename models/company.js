const mongoose = require("mongoose");

const { Schema } = mongoose;

const companySchema = new Schema({
  location: [
    {
      type: Schema.Types.ObjectId,
      ref: "Location",
    },
  ],
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
  companyName: String,
  ticker: String,
});

module.exports = mongoose.model("Company", companySchema);
