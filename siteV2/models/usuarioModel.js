
var database = require("../database/config")

//LOGIN
function autenticar(email, senha) {
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha) {
    var query = `INSERT INTO usuario (nome, email, senha) VALUES ('${nome}','${email}', '${senha}')`;
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
module.exports = {
    autenticar,
    listarUsuarios,
    cadastrar,
    deletarUsuario
};
