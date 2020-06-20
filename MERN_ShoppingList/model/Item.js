const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now() },
});

const ItemModel = mongoose.model("Item", ItemSchema);

module.exports = ItemModel;
