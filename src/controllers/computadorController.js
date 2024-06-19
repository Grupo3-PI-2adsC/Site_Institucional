var computadorModel = require("../models/computadorModel");


function listarComputadores(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer;
    computadorModel.listarComputadores(fkEmpresa).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
        return;
    })
}


function excluirComputador(req, res) {
    var idComputador = req.body.idComputadorServer;
    computadorModel.excluirComputador(idComputador).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
        return;
    })
}

function trazerInfosComputador(req, res) {
    var fkEmpresa = req.body.idEmpresaServer;
    computadorModel.trazerInfosComputador(fkEmpresa).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
        return;
    })
}

module.exports = {
    listarComputadores,
    excluirComputador,
    trazerInfosComputador
    // cadastrar2
}