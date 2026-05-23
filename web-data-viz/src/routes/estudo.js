var express = require("express");
var router = express.Router();

var estudoController = require("../controllers/estudoController");

router.post("/cadastrar", function (req, res) {
  estudoController.cadastrar(req, res);
})

router.get("/estatisticas/:idUsuario", function (req,res){
  estudoController.buscarEstatisticas(req,res);
})

router.get("/dadosGraficoRosca/:idUsuario", function (req, res) {
    estudoController.buscarDadosGraficoRosca(req, res);
});

router.get("/dadosGraficoLinha/:idUsuario", function (req, res) {
    estudoController.buscarDadosGraficoLinha(req, res);
});

router.get("/ultimoEstudo/:idUsuario", function (req, res) {
    estudoController.buscarUltimoEstudo(req, res);
});
module.exports = router;