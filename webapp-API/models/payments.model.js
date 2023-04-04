const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  paymentName: String,
  paymentType: String,
  paymentAmount: Number,
  paymentIssueDate: Date,
  paymentStatus: String,
});

const paymentModel = mongoose.model("payments", paymentSchema);

module.exports = paymentModel;