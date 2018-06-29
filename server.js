// npm requirements
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var cheerio = require("cheerio");

// require models
// var db = require("./models");

// set a port
var PORT = process.env.PORT || 3000;

// initialize Express
var app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
// express.static serves the public folder as a static directory
app.use(express.static("public"));

// Routes
app.get("/", function(req, res) {
  console.log('hookin it up');
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
