var manuaisModel = require("../models/manuaisModel");

function adicionar(req, res) {
    console.log("ENTREI NO CONTROLLER")
    var titulo = req.body.tituloServer;
    var descricao = req.body.descricaoServer;
    var idUsuario = req.body.idUsuarioServer;

    // chamando função         then = depois (retornar mensagem normal bd) - catch = pegar (retornar erro bd)
    manuaisModel.adicionar(titulo, descricao, idUsuario)
    .then(function (resultado) {
        console.log("ESTOU DENTRO then CONTROLLER MANUAIS");
        console.log(resultado);
        console.log(res);
        res.json(resultado);
    })
    .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })

}

module.exports = {
    adicionar
}