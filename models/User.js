const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = schema({
  //   username: {
  //     type: String,
  //     required: true,
  //   },
  _id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
