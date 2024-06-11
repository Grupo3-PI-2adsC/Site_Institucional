var express = require("express");
var router = express.Router();

var manualController = require("../controllers/manualController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarManual", function (req, res) {
    manualController.adicionarManual(req, res);
})
router.get("/listarManual", function (req, res) {
    manualController.listarManual(req, res);
})
router.put("/atualizarManual", function (req, res) {
    manualController.atualizarManual(req, res);
})
router.delete("/removerManual", function (req, res) {
    manualController.removerManual(req, res);
})

module.exports = router;