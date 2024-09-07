const mongoose = require("mongoose");

const pointTableSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  logo: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  won: {
    type: String,
    require: true,
  },
  lose: {
    type: String,
    require: true,
  },
  nrr: {
    type: String,
    require: true,
  },
  points: {
    type: String,
    require: true,
  },
  results: [
    {
      type: String,
      require: true,
    },
    {
      type: String,
      require: true,
    },
    {
      type: String,
      require: true,
    },
    {
      type: String,
      require: true,
    },
    {
      type: String,
      require: true,
    }
  ],
});

module.exports = mongoose.model("pointTable", pointTableSchema);
