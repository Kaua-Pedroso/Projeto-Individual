var database = require("../database/config");

function cadastrar(horas,idCompositor,tecnica,idUsuario) {
  
  var instrucaoSql = `INSERT INTO estudo (tecnica, horas, fkUsuario, fkCompositor) VALUES ('${tecnica}',${horas},${idUsuario},${idCompositor})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  cadastrar
}
