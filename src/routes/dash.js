var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/buscarUltimasMedidascpu", function (req, res) {
    dashController.buscarUltimasMedidasCpu(req, res);
})
router.post("/buscarUltimasMedidasram", function (req, res) {
    dashController.buscarUltimasMedidasRam(req, res);
})
router.post("/buscarUltimasMedidasdisco", function (req, res) {
    dashController.buscarUltimasMedidasDisco(req, res);
})
router.post("/buscarUltimasMedidasrede", function (req, res) {
    dashController.buscarUltimasMedidasRede(req, res);
})

router.post("/atualizarMedidascpu", function (req, res) {
    dashController.atualizarMedidasCpu(req, res);
})
router.post("/atualizarMedidasram", function (req, res) {
    dashController.atualizarMedidasRam(req, res);
})
router.post("/atualizarMedidasdisco", function (req, res) {
    dashController.atualizarMedidasDisco(req, res);
})
router.post("/atualizarMedidasrede", function (req, res) {
    dashController.atualizarMedidasRede(req, res);
})
router.post("/atualizarParametro", function (req, res) {
    dashController.atualizarParametro(req, res);
})
router.post("/listarLimites", function (req, res) {
    dashController.listarLimites(req, res);
})


module.exports = router;