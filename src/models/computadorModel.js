
var database = require("../database/config")

function listarComputadores(fkEmpresa) {
    var instrucao = `
        SELECT * FROM maquina WHERE fkEmpresa = ${fkEmpresa} and ativo = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function excluirComputador(idComputador) {
    var instrucao = `
        update maquina set ativo = 0 where idMaquina = '${idComputador}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function trazerInfosComputador(fkEmpresa) {
    var instrucao = `
        SELECT 
        sub.fkTipoComponente,
        tp.nomeComponente,
        STRING_AGG(CONCAT(sub.nomeCampo, ': ', sub.valorCampo), ', ') AS combined_col
        FROM
        (SELECT DISTINCT fkTipoComponente, nomeCampo, valorCampo
            FROM dadosFixos
            WHERE fkMaquina = '${fkEmpresa}') sub 
        LEFT JOIN tipoComponente tp ON sub.fkTipoComponente = tp.idTipoComponente
        where nomeComponente not in ('Memoria')
        GROUP BY sub.fkTipoComponente, tp.nomeComponente;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    listarComputadores,
    excluirComputador,
    trazerInfosComputador
    // cadastrar2
};
