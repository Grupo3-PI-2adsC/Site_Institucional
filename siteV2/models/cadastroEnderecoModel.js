var database = require("../database/config");

function cadastrar(rua, bairro, cidade, estado, cep, numero, complemento, fkEmpresa) {
  var query = `INSERT INTO endereco (idEndereco, rua, bairro, cidade, estado, cep, numero, complemento, fkEmpresa) VALUES (${fkEmpresa}, ${fkEmpresa}, '${rua}','${bairro}', '${cidade}', '${estado}', '${cep}', ${numero}, '${complemento}')`;

  return database.executar(query);
}

module.exports = { 
    cadastrar
 };
