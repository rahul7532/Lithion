const mongoose = require("mongoose");
const schema = mongoose.Schema;

const company = schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  visits: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Company", company);
