const mongoose = require("mongoose");

const auditSchema = mongoose.Schema({
  auditName: String,
  auditType: String,
  auditAmount: Number,
  auditIssueDate: Date,
  auditStatus: String,
});

const auditModel = mongoose.model("audits", auditSchema);

module.exports = auditModel;