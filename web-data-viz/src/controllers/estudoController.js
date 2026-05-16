var estudoModel = require("../models/estudoModel");

function cadastrar(req, res) {
  var horas = req.body.horasServer;
  var idCompositor = req.body.compositorServer;
  var tecnica = req.body.tecnicaServer;
  var idUsuario = req.body.idUsuarioServer;

  console.log(`Dados recebidos: Horas: ${horas}, ID Compositor: ${idCompositor}, Id Usuário: ${idUsuario}, Tecnica: ${tecnica}`)
  if(horas == undefined){
    res.status(400).send("Horas está undefined");
  } else if(idCompositor == undefined){
    res.status(400).send("Id do Compositor está undefined")
  } else if(idUsuario == undefined){
    res.status(400).send("O Id do Usuário está undefined")
  } else{
    estudoModel.cadastrar(horas,idCompositor,tecnica,idUsuario)
    .then(function (resultado){
      res.json(resultado);
    }).catch(function (erro){
      console.log(erro);
      console.log("\nHouve um erro ao realizar o registro! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    })
  }
}

module.exports = {
 cadastrar
}