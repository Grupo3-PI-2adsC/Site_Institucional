
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

// select infos gerais pcs

// select top 1
// (select count(*) from maquina where fkEmpresa = 1) as totalMaquinas,
// (select count(*) from maquina where ativo = 1 and fkEmpresa = 1) as totalMaquinasAtivas,
// (
// select count(*) from maquina as m
// left join dadosFixos as df on m.idMaquina = df.fkMaquina
// where m.ativo = 1
// and df.nomeCampo = 'modelo do Sistema'
// and df.valorCampo like ('windows')
// and fkEmpresa = 1
// ) as totalMaquinasWindows,

// (
// select count(*) from maquina as m
// left join dadosFixos as df on m.idMaquina = df.fkMaquina
// where m.ativo = 1
// and df.nomeCampo = 'modelo do Sistema'
// and df.valorCampo not like ('windows')
// and fkEmpresa = 1
// ) as totalMaquinasLinux
// from 
// maquina;




// CADASTRO!

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
// function cadastrar(nome, cnpj, email, senha) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, cnpj, email, senha);
    
//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucao = `
//         INSERT INTO empresa (nome, cnpj, email, senha) VALUES ('${nome}', '${cnpj}', '${email}', '${senha}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }
// function cadastrar2(rua, bairro, cidade, estado, cep, numero, complemento, fkEmpresa) {
//     var instrucao = `INSERT INTO endereco (rua, bairro, cidade, estado, cep, numero, complemento, fkEmpresa) VALUES ('${rua}','${bairro}', '${cidade}', '${estado}', '${cep}','${numero}', '${complemento}', '${fkEmpresa}')`;
  
//     return database.executar(instrucao);
//   }

module.exports = {
    listarComputadores,
    excluirComputador
    // cadastrar2
};
