var database = require("../database/config");

function cadastrar(horas,idCompositor,tecnica,idUsuario) {
  
  var instrucaoSql = `INSERT INTO estudo (tecnica, horas, fkUsuario, fkCompositor) VALUES ('${tecnica}',${horas},${idUsuario},${idCompositor})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarEstatisticas(idUsuario){
  var instrucaoSql = 
  `SELECT
    
    (SELECT SUM(horas) FROM estudo WHERE fkUsuario = ${idUsuario}) as total_horas,
    
    (SELECT c.nome FROM estudo AS e
      JOIN compositor AS c 
        ON e.fkCompositor = c.id
          WHERE e.fkUsuario = ${idUsuario}
      GROUP BY fkCompositor
        ORDER BY SUM(horas) DESC LIMIT 1) AS compositor_favorito,
        
    (SELECT tecnica FROM estudo AS e 
      WHERE fkUsuario = ${idUsuario}
        GROUP BY e.tecnica
          ORDER BY SUM(e.horas) DESC LIMIT 1) AS tecnica_foco,
        
    (SELECT SUM(e2.horas) FROM estudo AS e2
      JOIN compositor AS c2
        ON e2.fkCompositor = c2.id
          WHERE e2.fkUsuario = ${idUsuario} AND c2.nome = compositor_favorito) AS horas_compositor,

    (SELECT SUM(e.horas) FROM estudo AS e 
      WHERE e.fkUsuario = ${idUsuario}
        GROUP BY e.tecnica
          ORDER BY SUM(e.horas) DESC LIMIT 1) AS horas_tecnica
          
    FROM usuario 
      WHERE id = ${idUsuario}`

      console.log("Executando a instrução SQL: \n" + instrucaoSql);
      return database.executar(instrucaoSql);
}


module.exports = {
  cadastrar,
  buscarEstatisticas
}
