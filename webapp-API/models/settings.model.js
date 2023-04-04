const mongoose = require("mongoose");

const settingSchema = mongoose.Schema({
  settingName: String,
  settingType: String,
  settingAmount: Number,
  settingIssueDate: Date,
  settingStatus: String,
});

const settingModel = mongoose.model("settings", settingSchema);

module.exports = settingModel;