var database = require("../database/config");

function adicionar(titulo, descricao, idUsuario) {
    var instrucao = `
        INSERT INTO manuais (tituloManual, descricaoManual, usuarioUltimaAlteracao, dtUltimaAlteracao, fkUsuarioCriador, dtCriacao) values
	    ('${titulo}', '${descricao}', ${idUsuario}, current_timestamp, ${idUsuario}, current_timestamp);`;
        
        console.log(instrucao);
    
    return database.executar(instrucao);
}

module.exports = {
    adicionar
};