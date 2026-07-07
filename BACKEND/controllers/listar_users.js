var db = require("../database/connection");

async function all_users (req, res){
   try{
    var usuarios = await db.query(`SELECT 
        usuarios.login,
        usuarios.cargo,
        equipes.nome AS equipe
        FROM 
        usuarios
        JOIN 
        equipes
        ON
        usuarios.equipe_id = equipes.id`)
    return res.status(200).json({
        mensagem: usuarios.rows
    });
    }
    catch (erro){
        return res.status(500).json({
            mensagem: "ERRO INTERNO!"
        });
    };
};

module.exports = {
    all_users
}