var express = require("express");
var router = express.Router();

var estudoController = require("../controllers/estudoController");

router.post("/cadastrar", function (req, res) {
  estudoController.cadastrar(req, res);
})

router.get("/estatisticas/:idUsuario", function (req,res){
  estudoController.buscarEstatisticas(req,res);
})

module.exports = router;