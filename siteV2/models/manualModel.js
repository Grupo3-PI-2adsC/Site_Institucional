var database = require("../database/config")

function adicionarManual(tituloManual, descricao, idUsuario, data) {
    var query = `INSERT INTO manuais (tituloManual, descricaoManual, fkUsuarioCriador, dtCriacao ) VALUES ('${tituloManual}','${descricao}', '${idUsuario}', '${data}')`;
    console.log(query);
    return database.executar(query);
}
function listarManual() {
    var query = `SELECT * FROM manuais`;
    console.log(query);
    return database.executar(query);
}
function atualizarManual(tituloManual, descricao, idUsuario, data) {
    var query = `UPDATE manuais SET tituloManual = '${tituloManual}', descricaoManual = '${descricao}', dtUltimaAlteracao ='${data} WHERE fkUsuarioCriador = '${idUsuario}'` ;
    console.log(query);
    return database.executar(query);
}
module.exports = {
    adicionarManual,
    listarManual,
    atualizarManual
};