const mongoose = require("mongoose");

const { Schema } = mongoose;

const roleSchema = new Schema({
  person: {
    type: Schema.Types.ObjectId,
    ref: "Person",
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
  title: String,
  role_desc: String,
});

module.exports = mongoose.model("Role", roleSchema);
