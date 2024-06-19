var database = require("../database/config")

function adicionarManual(tituloManual, descricao, idUsuario, data) {
    var query = `INSERT INTO manuais (tituloManual, descricaoManual, fkUsuarioCriador, dtCriacao ) VALUES ('${tituloManual}','${descricao}', '${idUsuario}', '${data}')`;
    console.log(query);
    return database.executar(query);
}

function listarManual() {
    var query = `SELECT *
FROM 
    manuais m
JOIN 
    usuario u ON m.fkUsuarioCriador = u.idUsuario;
`;
    console.log(query);
    return database.executar(query);
}

function atualizarManual(tituloManual, descricao, idManual) {
    var query = `UPDATE manuais SET tituloManual = '${tituloManual}', descricaoManual = '${descricao}' WHERE idManual = '${idManual}'` ;
    console.log(query);
    return database.executar(query);
}

function removerManual(idManual) {
    var query = `DELETE from manuais WHERE idManual = '${idManual}'` ;
    console.log(query);
    return database.executar(query);
}


module.exports = {
    adicionarManual,
    listarManual,
    atualizarManual,
    removerManual
};
