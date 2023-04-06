var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");

const customerModel = require("../models/customers.model");

/* GET All Customers */
router.get("/list", async (req, res, next) => {
  try {
    let customerList = await customerModel.find();
    res.send({
      status: 200,
      message: "List Data is here",
      data: customerList,
    });
  } catch (error) {
    res.send({
      status: 501,
      message: "List not found",
      data: null,
    });
    console.log(error);
  }
});

/* GET Details for selected+ Customers */
router.get("/view", async (req, res, next) => {
  try {
    const userId = req.query.userId;
    let customerList = await customerModel.findById(userId);
    res.send({
      status: 200,
      data: customerList,
    });
  } catch (error) {
    res.send({
      status: 501,
      message: "Customer not found",
    });
    console.log(error);
  }
});

/* Create new customer */
router.post("/add", async (req, res, next) => {
  let customerObj = new customerModel(req.body);
  let saveObj;
  try {
    saveObj = await customerObj.save();
    res.send({
      status: 200,
      message: "User added successfully",
      data: saveObj,
    });
  } catch (error) {
    res.send({
      status: 501,
      message: "User was not added",
      data: null,
    });
    console.log(error);
  }
});

//  update existing customer
router.put("/edit", async (req, res, next) => {
  let customerObj = new customerModel(req.body);
  try {
    const userId = req.query.userId;
    let customerList = await customerModel.findByIdAndUpdate(
      userId,
      customerObj
    );
    res.send({
      status: 200,
      data: customerList,
    });
  } catch (error) {
    res.send({
      status: 501,
      message: "Una ble to update the customer",
      data: null,
    });
    console.log(error);
  }
});

//  delete existing customer
router.delete("/delete", async (req, res, next) => {
  let customerObj = new customerModel(req.body);
  try {
    const userId = req.query.userId;
    await customerModel.findByIdAndDelete(userId);
    res.send({
      status: 200,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.send({
      status: 501,
      message: "Unable to delete the customer",
      data: null,
    });
    console.log(error);
  }
});

// delete multiple customers
router.delete("/delete-list", async (req, res, next) => {
  let customerObj = new customerModel(req.body);
  try {
    const userId = req.query.userId;
    await customerModel.deleteMany({ firstName: "Khushboo" });
    res.send({
      status: 200,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.send({
      status: 501,
      message: "Unable to delete the customer",
      data: null,
    });
    console.log(error);
  }
});

//  search existing customer
router.get("/add", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
