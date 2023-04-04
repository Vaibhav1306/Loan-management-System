const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema({
  invoiceName: String,
  invoiceType: String,
  invoiceAmount: Number,
  invoiceIssueDate: Date,
  invoiceStatus: String,
});

const invoiceModel = mongoose.model("invoices", invoiceSchema);

module.exports = invoiceModel;