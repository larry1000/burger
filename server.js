var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var orm = require("./config/orm.js");

var app = express();
var PORT = process.env.PORT || 8000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

let routes = require("./controllers/burgers_controller");
app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
