var db = require("../database/connection");

async function editar_usuario (req, res){
    var {id} = req.params;
    var {login, senha, cargo, equipe_id}= req.body;

   var resultado = await db.query(`UPDATE usuarios SET 
    login = '${login}',
     senha = '${senha}', 
     cargo = '${cargo}', 
     equipe_id = ${equipe_id} 
     WHERE id = ${id}`)
    
    return res.json ({
        status: "true",
        mensagem: "alteraçao feita!"
    });
};

module.exports = {
    editar_usuario
}