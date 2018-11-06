let express = require("express");
let router = express.Router();
let burger = require("../models/burger");

router.get("/", (req, res) => {
  console.log("Connected to Home Screen");
  let petData = ["dog", "cat", "parrot"];
  res.render("index", { data: petData });
});
router.post("/burgers/create", (req, res) => {
  console.log("Req body: ", req.body.burgerName);
});

module.exports = router;
