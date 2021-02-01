const mongoose = require("mongoose");

const { Schema } = mongoose;

const relationshipSchema = new Schema({
  type: String,
});

module.exports = mongoose.model("Relationship", relationshipSchema);
