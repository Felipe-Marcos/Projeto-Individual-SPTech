var database = require("../database/config");

// Adiciona uma nova tarefa (apenas com o ID do usuário)
function adicionarTarefa(fkUsuario) {
    var instrucaoSql = `
        INSERT INTO tarefa (fkUsuario)
        VALUES ('${fkUsuario}');
    `;
    return database.executar(instrucaoSql);
}


// Lista todas as tarefas do usuário (últimos estados de cada uma ou histórico completo)
function listarTarefas(fkUsuario) {
    var instrucaoSql = `
        SELECT * FROM infoTabela WHERE fkUsuario = ${fkUsuario};
    `;
    return database.executar(instrucaoSql);
}

// Registra a movimentação de uma tarefa (inserção de novo estado no histórico)
function atualizarTarefa(fkTarefa, fkEstado, fkUsuario, nomeMusica) {
    var instrucaoSql = `
        INSERT INTO infoTabela (fkTarefa, fkEstado, fkUsuario, nomeMusica, dtTabela)
        VALUES (${fkTarefa}, ${fkEstado}, ${fkUsuario}, '${nomeMusica}', default);
    `;
    return database.executar(instrucaoSql);
}

function moverTarefa(fkTarefa, fkEstado) {
    var instrucaoSql = `
        UPDATE infoTabela SET fkEstado = ${fkEstado}, dtTabela = curdate() WHERE fkTarefa = ${fkTarefa};
    `;
    return database.executar(instrucaoSql);
}

function removerTarefa(fkTarefa) {
    var instrucaoSql = `
        DELETE FROM infoTabela WHERE fkTarefa = ${fkTarefa};
    `;
    return database.executar(instrucaoSql);
}


module.exports = {
    adicionarTarefa,
    listarTarefas,
    atualizarTarefa,
    moverTarefa,
    removerTarefa
};
