const { UDT } = require("mssql");
var database = require("../database/config");

function buscarUltimasMedidasCpu(fkMaquina) {
    instrucaoSql = `
    select top 5 * from dadosTempoReal where fkMaquina = '${fkMaquina}' and fkTipoComponente = 3 order by dataHora asc;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarUltimasMedidasRede(fkMaquina) {
    instrucaoSql = `
    select top 5 * from dadosTempoReal where fkMaquina = '${fkMaquina}' and fkTipoComponente = 4 order by dataHora asc;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarUltimasMedidasRam(fkMaquina) {
    instrucaoSql = `
    select top 5 * from dadosTempoReal where fkMaquina = '${fkMaquina}' and fkTipoComponente = 2 order by dataHora asc;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarUltimasMedidasDisco(fkMaquina) {
    instrucaoSql = `
    select top 5 * from dadosTempoReal where fkMaquina = '${fkMaquina}' and fkTipoComponente = 5 order by dataHora asc;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarMedidasCpu(fkMaquina) {
    instrucaoSql = `
    select top 1 * from dadosTempoReal where fkMaquina = '${fkMaquina}' and fkTipoComponente = 3 order by dataHora desc;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function atualizarMedidasRam(fkMaquina) {
    instrucaoSql = `
    select top 1 * from dadosTempoReal where fkMaquina = '${fkMaquina}' and fkTipoComponente = 2 order by dataHora desc;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function atualizarMedidasRede(fkMaquina) {
    instrucaoSql = `
    select top 1 * from dadosTempoReal where fkMaquina = '${fkMaquina}' and fkTipoComponente = 4 order by dataHora desc;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function atualizarMedidasDisco(fkMaquina) {
    instrucaoSql = `
    select top 1 * from dadosTempoReal where fkMaquina = '${fkMaquina}' and fkTipoComponente = 5 order by dataHora desc;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function atualizarParametro(valor, componente, idEmpresa) {
    instrucaoSql = `
        update tipoComponente set metricaEstabelecida =  ${valor} where nomeComponente = '${componente} and fkEmpresa = ${idEmpresa}' 
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function listarLimites(idEmpresa) {
    instrucaoSql = `    
        select top 1
        (
        select metricaEstabelecida from tipoComponente where nomeComponente in ('CPU')  and fkEmpresa = ${idEmpresa}
        ) as CPU,
        (
        select metricaEstabelecida from tipoComponente where nomeComponente in ('MEMORIA')  and fkEmpresa = ${idEmpresa}
        ) as MEMORIA,
        (
        select metricaEstabelecida from tipoComponente where nomeComponente in ('DISCO')  and fkEmpresa = ${idEmpresa}
        ) as DISCO,
        (
        select metricaEstabelecida from tipoComponente where nomeComponente in ('REDE')  and fkEmpresa = ${idEmpresa}
        ) as REDE
        from 
        tipoComponente;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidasCpu,
    buscarUltimasMedidasRam,
    buscarUltimasMedidasDisco,
    buscarUltimasMedidasRede,
    atualizarMedidasCpu,
    atualizarMedidasRam,
    atualizarMedidasDisco,
    atualizarMedidasRede,
    atualizarParametro,
    listarLimites
}