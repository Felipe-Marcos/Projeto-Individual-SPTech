var dashModel = require("../models/dashModel");

function exibirAndamentoMensal(req, res) {
  var fkUsuario = Number(req.params.fkUsuario);
  var fkEstado = Number(req.params.fkEstado);
  dashModel
    .exibirAndamentoMensal(fkUsuario, fkEstado)
    .then(function (resultado) {
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar os dados de andamento mensal: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  exibirAndamentoMensal,
}