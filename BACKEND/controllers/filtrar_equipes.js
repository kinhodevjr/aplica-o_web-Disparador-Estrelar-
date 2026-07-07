const db = require("../database/connection");

async function f_equipe (req, res) {
    let {NOME} = req.query
    console.log(NOME);
    try{
    const time = await db.query(`SELECT
        usuarios.login,
        usuarios.senha,
        usuarios.cargo,
        equipes.nome AS equipe
        FROM usuarios
        JOIN equipes
        ON usuarios.equipe_id = equipes.id
        WHERE
        equipes.nome = '${NOME}'`)
    
    if (time.rows.length === 0){
        return res.status(404).json({
        mensagem: "usuario nao encontrado!"
    })}
    
    return res.status(200).json({
        mensagem: "usuarios encontrados",
        usuario: time.rows
    });

    }
    catch (error){
        console.log(error);
        return res.status(500).json({
            mensagem:"ERRO INTERNO"
        });
    };

    

};

module.exports = {f_equipe};