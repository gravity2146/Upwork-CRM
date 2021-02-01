const mongoose = require("mongoose");

const { Schema } = mongoose;

const personSchema = new Schema({
  phones: [
    {
      type: Schema.Types.ObjectId,
      ref: "PersonPhone",
    },
  ],
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
  personRelationships: [
    {
      type: Schema.Types.ObjectId,
      ref: "PersonRelationship",
    },
  ],
  firstName: String,
  lastName: String,
  birthday: String,
});

module.exports = mongoose.model("Person", personSchema);
