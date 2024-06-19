var dashModel = require("../models/dashModel");

function buscarUltimasMedidasCpu(req, res) {
    dashModel.buscarUltimasMedidasCpu(req.body.fkMaquinaServer)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function buscarUltimasMedidasRam(req, res) {
    dashModel.buscarUltimasMedidasRam(req.body.fkMaquinaServer)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function buscarUltimasMedidasDisco(req, res) {
    dashModel.buscarUltimasMedidasDisco(req.body.fkMaquinaServer)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function buscarUltimasMedidasRede(req, res) {
    dashModel.buscarUltimasMedidasRede(req.body.fkMaquinaServer)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizarMedidasCpu(req, res) {
    dashModel.atualizarMedidasCpu(req.body.fkMaquinaServer)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function atualizarMedidasRam(req, res) {
    dashModel.atualizarMedidasRam(req.body.fkMaquinaServer)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function atualizarMedidasDisco(req, res) {
    dashModel.atualizarMedidasDisco(req.body.fkMaquinaServer)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function atualizarMedidasRede(req, res) {
    dashModel.atualizarMedidasRede(req.body.fkMaquinaServer)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function atualizarParametro(req, res) {
    var valor = req.body.valorServer;idEmpresa
    var componente = req.body.componenteServer;
    var idEmpresa = req.body.idEmpresaServer;
    dashModel.atualizarParametro(valor, componente, idEmpresa)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function listarLimites(req, res) {
    var idEmpresa = req.body.idEmpresaServer;
    dashModel.listarLimites(idEmpresa)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
module.exports = {
    buscarUltimasMedidasCpu,
    buscarUltimasMedidasRam,
    buscarUltimasMedidasDisco,
    buscarUltimasMedidasRede,
    atualizarMedidasCpu,
    atualizarMedidasRam,
    atualizarMedidasDisco,
    atualizarParametro,
    atualizarMedidasRede,
    listarLimites
}