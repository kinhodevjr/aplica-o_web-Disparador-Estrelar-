var db = require("../database/connection");

async function login (req, res){
    var {login, senha} = req.body 
    if (!login || !senha){
        return res.json ({
            status: "false",
            mensagem: "PREENCHA TODOS OS CAMPOS!"
        });
    };
    try{
    var resultado_consulta = await db.query(`SELECT
         usuarios.login,
         usuarios.cargo,
         usuarios.senha,
         equipes.nome AS equipe
         FROM usuarios 
         JOIN equipes
         ON usuarios.equipe_id = equipes.id
         WHERE login = '${login}'`);
    console.log(resultado_consulta.rows)

    if ( resultado_consulta.rows.length ===0){
        return res.status(401).json({
            status: "false",
            mensagem: "USUARIO NAO EXISTE!"
        });
    };

    var usuario = resultado_consulta.rows[0];
    console.log(req.usuario)

   if (usuario.senha !== senha){
    return res.json({
        status: "false",
        mensagem:"SENHA INCORRETA!"
    })
    
   };

   return res.status(200).json({
        mensagem: "LOGIN FEITO!",
        id: usuario.id,
        usuario: usuario.login,
        senha: usuario.senha,
        cargo: usuario.cargo,
        equipe: usuario.equipe
   });
   }
   catch (erro){
        console.log(erro);
        return res.status(500).json({
            mensaegm: "ERRO INTERNO"
        });
   };


    
};

module.exports = {
    login
};