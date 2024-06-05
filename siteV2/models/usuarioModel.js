
var database = require("../database/config")

//LOGIN
function autenticar(email, senha) {
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// CADASTRO!

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, cnpj, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, cnpj, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO empresa (nome, cnpj, email, senha) VALUES ('${nome}', '${cnpj}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrar2(rua, bairro, cidade, estado, cep, numero, complemento, fkEmpresa) {
    var instrucao = `INSERT INTO endereco (rua, bairro, cidade, estado, cep, numero, complemento, fkEmpresa) VALUES ('${rua}','${bairro}', '${cidade}', '${estado}', '${cep}','${numero}', '${complemento}', '${fkEmpresa}')`;
  
    return database.executar(instrucao);
  }

module.exports = {
    autenticar,
    cadastrar,
    cadastrar2
};
