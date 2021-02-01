const mongoose = require("mongoose");

const { Schema } = mongoose;

const personRelationshipSchema = new Schema({
  personOne: {
    type: Schema.Types.ObjectId,
  },
  personTwo: {
    type: Schema.Types.ObjectId,
    ref: "Person",
  },
  relationship: {
    type: Schema.Types.ObjectId,
    ref: "Relationship",
  },
});

module.exports = mongoose.model("PersonRelationship", personRelationshipSchema);
