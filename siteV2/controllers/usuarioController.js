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

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var usuario_receber = require("../routes/usuarios");
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var cnpj = req.body.cnpjServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (cnpj == undefined){
        res.status(400).send("Seu cnpj está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, cnpj, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function cadastrar2(req, res) { // PARA CADASTRAR MEU CARDAPIO COM FK (idRestaurante)
    var fkEmpresa = sessionStorage.ID_USUARIO;
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
    autenticar,
    cadastrar,
    cadastrar2
}