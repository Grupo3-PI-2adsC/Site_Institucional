var express = require("express");
var router = express.Router();

var computadorController = require("../controllers/computadorController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/listarComputadores", function (req, res) {
    computadorController.listarComputadores(req, res);
})

router.post("/excluirComputador", function (req, res) {
    computadorController.excluirComputador(req, res);
})

router.post("/trazerInfosComputador", function (req, res) {
    computadorController.trazerInfosComputador(req, res);
})

module.exports = router;