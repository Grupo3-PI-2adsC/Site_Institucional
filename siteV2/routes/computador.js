var express = require("express");
var router = express.Router();

var computadorController = require("../controllers/computadorController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/listarComputadores", function (req, res) {
    computadorController.listarComputadores(req, res);
})

router.get("/listarUsuarios", function (req, res) {
    computadorController.listarUsuarios(req, res);
})

module.exports = router;