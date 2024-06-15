var express = require("express");
var router = express.Router();

// passa pro controller IMPORTANTE
var manuaisController = require("../controllers/manuaisController");

router.post("/adicionar", function(req, res){
    manuaisController.adicionar(req, res);
});

module.exports = router;