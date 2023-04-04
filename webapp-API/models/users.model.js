const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: String,
  userType: String,
  userAmount: Number,
  userIssueDate: Date,
  userStatus: String,
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;