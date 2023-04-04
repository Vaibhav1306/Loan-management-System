var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vshrivastava103:Vaibhav%40123@loanportalcluster.vqxkh24.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(console.log("Connected"))
  .catch((e) => {
    console.log(e);
  });

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var customersRouter = require("./routes/customers");
var loansRouter = require("./routes/loans");
var paymentsRouter = require("./routes/payments");
var invoicesRouter = require("./routes/invoices");
var settingsRouter = require("./routes/settings");
var auditRouter = require("./routes/audit");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/customers", customersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
