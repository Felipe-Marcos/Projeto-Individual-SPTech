var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/exibir-andamento-mensal/:fkUsuario/:fkEstado", function(req, res) {
  dashController.exibirAndamentoMensal(req, res);
});

module.exports = router;