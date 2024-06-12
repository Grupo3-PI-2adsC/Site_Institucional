var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resposta) {
                    if (resposta.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(200).json(resposta);
                    }

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) { // PARA CADASTRAR MEU CARDAPIO COM FK (idRestaurante)
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("O nome está indefinido!");
    } else if (email == undefined) {
        res.status(403).send("O email está indefinido!");
    }
    else if (senha == undefined) {
        res.status(403).send("O senha está indefinido!");

    } else {
        usuarioModel.cadastrar(nome, email, senha)
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

function deletarUsuario(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    usuarioModel.deletarUsuario(idUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
        return;
    })
}



function listarUsuarios(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer;
    usuarioModel.listarUsuarios(fkEmpresa).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
        return;
    })

}
function atualizarUsuario(req, res) { // PARA CADASTRAR MEU CARDAPIO COM FK (idRestaurante)
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("O nome está indefinido!");
    } else if (email == undefined) {
        res.status(403).send("O email está indefinido!");
    }
    else if (senha == undefined) {
        res.status(403).send("O senha está indefinido!");

    } else {
        usuarioModel.atualizarUsuario(nome, email, senha, idUsuario)
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
    autenticar,
    listarUsuarios,
    cadastrar,
    deletarUsuario,
    atualizarUsuario
}