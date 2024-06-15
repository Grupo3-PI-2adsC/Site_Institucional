var express = require("express");
const path = require("path");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index");

});

module.exports = router;