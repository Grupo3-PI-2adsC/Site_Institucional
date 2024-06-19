
var database = require("../database/config")

//LOGIN
function autenticar(email, senha) {
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha, funcao) {
    var query = `INSERT INTO usuario (nome, email, senha, tipoUsuario) VALUES ('${nome}','${email}', '${senha}', '${funcao}')`;
    console.log(query);
    return database.executar(query);
}


function deletarUsuario(idUsuario) {
    var instrucao = `
        DELETE FROM usuario where idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarUsuarios(fkEmpresa) {
    var instrucao = `
        SELECT * FROM usuario where ativo = 1 and fkEmpresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function atualizarUsuario(nome, email, senha, idUsuario, funcao) {
    var query = `UPDATE usuario SET nome = '${nome}', email = '${email}', senha = '${senha}', tipoUsuario = '${funcao}' WHERE idUsuario = ${idUsuario}`;
    console.log(query);
    return database.executar(query);
}
module.exports = {
    autenticar,
    listarUsuarios,
    cadastrar,
    deletarUsuario,
    atualizarUsuario
};
