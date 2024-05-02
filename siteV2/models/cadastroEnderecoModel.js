var database = require("../database/config");

function cadastrar(rua, bairro, cidade, estado, cep, numero, complemento, fkEmpresa) {
  var query = `INSERT INTO endereco (rua, bairro, cidade, estado, cep, numero, complemento, fkEmpresa) VALUES ('${rua}','${bairro}', '${cidade}', '${estado}', '${cep}','${numero}', '${complemento}', '${fkEmpresa}')`;
console.log(query);
  return database.executar(query);
}

module.exports = { 
    cadastrar
 };
