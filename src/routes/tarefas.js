var express = require("express");
var router = express.Router();

var tarefaController = require("../controllers/tarefaController");

router.post("/adicionar-tarefa", function(req, res) {
    tarefaController.adicionarTarefa(req, res);
});

router.get("/listar-tarefas/:fkUsuario", function(req, res) {
    tarefaController.listarTarefas(req, res);
});

router.post("/mover-tarefa", function(req, res) {
    tarefaController.moverTarefa(req, res);
});

router.post("/atualizar-tarefa", function(req,res) {
    tarefaController.atualizarTarefa(req, res);
})

module.exports = router;
