const mongoose = require("mongoose");
const companyModel = require("./models/company");
const locationModel = require("./models/location");
const companyNumberModel = require("./models/companyPhone");
const roleModel = require("./models/role");
const personModel = require("./models/person");
const personPhoneModel = require("./models/personPhone");
const personRelationshipsModel = require("./models/personRelationship");
const relationshipModel = require("./models/relationship");
const faker = require("faker");

// mongodb atlas application connection url
const dbUrl =
  "mongodb+srv://Admin:1234@test.qejjt.mongodb.net/CRM?retryWrites=true&w=majority";

// mongodb atlas connection

mongoose.connect(dbUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

// connection failed
mongoose.connection.on(
  "error",
  console.error.bind(console, "Error while trying to connect to DB")
);

//coneection pass
mongoose.connection.once("open", () => {
  console.log("Successfully connected to DB");
});

const mockIds = [
  "5fd01ccddfc1e50036ca3002",
  "5fd01ccddfc1e50036ca3002",
  "5fd01ccddfc1e50036ca3002",
];

const randomData = async () => {
  await companyModel.deleteMany({});
  await locationModel.deleteMany({});
  await companyNumberModel.deleteMany({});
  await personModel.deleteMany({});
  await personPhoneModel.deleteMany({});
  await personRelationshipsModel.deleteMany({});
  await relationshipModel.deleteMany({});
  await roleModel.deleteMany({});

  for (let i = 0; i < 5; i++) {
    await new companyModel({
      companyName: faker.company.companyName(),
      ticker: faker.company.companySuffix(),
      lacations: mockIds,
      roles: mockIds,
      companPhone: mockIds,
    }).save();

    await new companyNumberModel({
      company: "5fd01ccddfc1e50036ca3002",
      location: "5fd01ccddfc1e50036ca3002",
      countryCode: faker.phone.phoneFormats(),
      areaCode: faker.phone.phoneFormats(),
      phoneNumber: faker.phone.phoneNumber(),
      extension: faker.phone.phoneFormats(),
      type: faker.phone.phoneFormats(),
    }).save();

    const phone = await new personPhoneModel({
      countryCode: faker.phone.phoneFormats(),
      areaCode: faker.phone.phoneFormats(),
      phoneNumber: faker.phone.phoneNumber(),
      extension: faker.phone.phoneFormats(),
      type: faker.phone.phoneFormats(),
    }).save();

    const relationship = await new relationshipModel({
      type: faker.address.streetAddress(),
    }).save();

    const personRelationship = await new personRelationshipsModel({
      personOne: "5fd01ccddfc1e50036ca3002",
      personTwo: "5fd01ccddfc1e50036ca3002",
      relationship: relationship._id,
    }).save();

    const role = await new roleModel({
      person: "5fd01ccddfc1e50036ca3002",
      company: "5fd01ccddfc1e50036ca3002",
      location: "5fd01ccddfc1e50036ca3002",
      title: faker.company.companyName(),
      role_desc: faker.company.companyName(),
    }).save();

    await new personModel({
      phones: [phone._id, phone._id, phone._id],
      roles: [role._id, role._id, role._id],
      personRelationships: [
        personRelationship._id,
        personRelationship._id,
        personRelationship._id,
      ],
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      birthday: faker.date.weekday(),
    }).save();
  }
};

randomData().then(() => {
  console.log("Connection closing");
  mongoose.connection.close();
});
