const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  categories: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
});

const List = mongoose.model("List", listSchema);

module.exports = List;
