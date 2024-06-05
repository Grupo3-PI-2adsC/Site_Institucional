var computadorModel = require("../models/computadorModel");


function listarComputadores(req, res) {
    computadorModel.listarComputadores().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
        return;
    })
}

function listarUsuarios(req, res) {
    computadorModel.listarUsuarios().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
        return;
    })

}


module.exports = {
    listarComputadores,
    listarUsuarios,
    // cadastrar,
    // cadastrar2
}