var manualModel = require("../models/manualModel");

function adicionarManual(req, res) { // PARA CADASTRAR MEU CARDAPIO COM FK (idRestaurante)
    var tituloManual = req.body.tituloServer;
    var descricao = req.body.descricaoServer;
    var idUsuario = req.body.idUsuarioServer;
    var data = req.body.dataServer;


    if (tituloManual == undefined) {
        res.status(400).send("O tituloManual está indefinido!");
    } else if (descricao == undefined) {
        res.status(403).send("O descricao está indefinido!");
    }
    else {
        manualModel.adicionarManual(tituloManual, descricao, idUsuario, data)
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
}
function listarManual(req, res){
    manualModel.listarManual()
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
function listarManual(req, res){
    manualModel.listarManual()
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
function atualizarManual(req, res){
    var tituloManual = req.body.tituloServer;
    var descricao = req.body.descricaoServer;
    var idUsuario = req.body.idUsuarioServer;
    var data = req.body.dataServer;

    manualModel.atualizarManual(tituloManual, descricao, idUsuario, data)
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
    adicionarManual,
    listarManual,
    atualizarManual
    // cadastrar2
}