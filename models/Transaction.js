const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const transactionSchema = new mongoose.Schema({
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
  },
  amount: { type: Number, required: true },
  type: { type: String, required: true },
  category: { type: String, required: true },
  reference: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Transactions", transactionSchema);
