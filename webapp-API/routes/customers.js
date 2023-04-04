var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");

const customerModel = require("../models/customers.model");

/* GET All Customers */
router.get("/", async (req, res, next) => {
  try {
    let customerList = await customerModel.find();
    const recordCount = customerList.length;
    console.log(recordCount);
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
router.put("/add", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//  delete existing customer
router.delete("/add", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//  search existing customer
router.get("/add", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
