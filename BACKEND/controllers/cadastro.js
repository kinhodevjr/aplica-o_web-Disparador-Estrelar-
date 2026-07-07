var db = require("../database/connection")

async function registro (req, res){
    console.log("cadastro inicado!");
    var {login, senha, cargo, equipe_id} = req.body
    if (!login || !senha || !cargo || !equipe_id){
        return res.json({
            status: "false",
            mensagem: "CAMPOS INVALIDOS!"
        });
    };
    try{
    await db.query(`INSERT INTO usuarios (login, senha, cargo, equipe_id) VALUES (
        '${login}',
        '${senha}',
        '${cargo}',
         ${equipe_id}
        )`);
        
    return res.json({
        status: "true",
        mensagem: "Usuario cadastrado!"
    })}

    catch (erro){
        console.log(erro); 
        return res.json({
            status: "false",
            mensagem: "erro interno!"
        });
    };


};

module.exports = {
    registro
}