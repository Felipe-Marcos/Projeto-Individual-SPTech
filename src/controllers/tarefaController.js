var tarefaModel = require("../models/tarefaModel");

function adicionarTarefa(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var nomeMusica = req.body.nomeMusica;

    if (!fkUsuario || !nomeMusica) {
        return res.status(400).send("Dados incompletos.");
    }

    tarefaModel.adicionarTarefa(fkUsuario)
        .then((resposta) => {
            tarefaModel.atualizarTarefa(resposta.insertId, 1, fkUsuario, nomeMusica)
                .then(() => {
                    res.status(200).send("Tarefa adicionada com sucesso!")
                }).catch(erro => {
                    console.error("Erro: Tarefa cadastrada, mas não atualizada");
                    res.status(500).json(erro.sqlMessage);
                });
        })
        .catch(erro => {
            console.error("Erro: Tarefa não cadastrada");
            res.status(500).json(erro.sqlMessage);
        });
}

function listarTarefas(req, res) {
    var fkUsuario = req.params.fkUsuario;
    if (!fkUsuario) {
        return res.status(400).send("Dados incompletos.");
    }

    tarefaModel.listarTarefas(fkUsuario)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma tarefa encontrada.");
            }
        })
        .catch(erro => {
            console.error("Erro: Não foi possível listar as tarefas");
            res.status(500).json(erro.sqlMessage);
        });
}

function atualizarTarefa(req, res) {
    var fkTarefa = req.body.fkTarefa
    var fkEstado = req.body.fkEstado
    var fkUsuario = req.body.fkUsuario
    var nomeMusica = req.body.nomeMusica

    tarefaModel.atualizarTarefa(fkTarefa, fkEstado, fkUsuario, nomeMusica)
                .then(() => {
                    res.status(200).send("Tarefa atualizada com sucesso!")
                }).catch(erro => {
                    console.error("Erro: Tarefa não atualizada");
                    res.status(500).json(erro.sqlMessage);
                });
}

module.exports = {
    adicionarTarefa,
    listarTarefas,
    atualizarTarefa,
};
