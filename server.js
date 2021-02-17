var express = require("express");
var path = require("path");
const fs = require("fs");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



var HTMLroutes = require('./routes/html-routes');
app.use(HTMLroutes);



app.listen(PORT, function () {
  console.log("App listening on localhost://" + PORT);
});

