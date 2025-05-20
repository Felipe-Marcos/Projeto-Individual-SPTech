var database = require("../database/config");

function exibirAndamentoMensal(fkUsuario, fkEstado) {
  var instrucaoSql = `
        SELECT COUNT(fkTarefa), dtTabela FROM infoTabela
        WHERE fkUsuario = ${fkUsuario} and fkEstado = ${fkEstado}
        GROUP BY dtTabela;
    `;
  return database.executar(instrucaoSql);
}

module.exports = {
  exibirAndamentoMensal
}