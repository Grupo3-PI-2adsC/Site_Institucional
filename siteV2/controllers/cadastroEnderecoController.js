var enderecoModel = require("../models/cadastroEnderecoModel");

function cadastrar(req, res) { // PARA CADASTRAR MEU CARDAPIO COM FK (idRestaurante)
    var fkEmpresa = req.params.fkEmpresa;
    var rua = req.body.ruaServer;
    var bairro = req.body.bairroServer;
    var cidade = req.body.cidadeServer;
    var estado = req.body.estadoServer;
    var cep = req.body.cepServer;
    var numero = req.body.numeroServer;
    var complemento = req.body.complementoServer;
 
    if (fkEmpresa == undefined) {
        res.status(400).send("O fkEmpresa está indefinido!");
    } else if (cep == undefined) {
        res.status(403).send("O CEP está indefinido!");
    } else if (rua == undefined) {
        res.status(403).send("A rua está indefinido!");
    } else if (numero == undefined) {
        res.status(403).send("O número está indefinido!");
    } else if (complemento == undefined) {
        res.status(403).send("O complemento está indefinido!");
    } else if (bairro == undefined) {
        res.status(403).send("O bairro está indefinido!");
    } else if (estado == undefined) {
        res.status(403).send("O estado está indefinido!");
    } else if (cidade == undefined) {
        res.status(403).send("O cidade está indefinido!");
    } else {
        enderecoModel.cadastrar2(rua, bairro, cidade, estado, cep, numero, complemento, fkEmpresa)
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

module.exports = {
    cadastrar
}