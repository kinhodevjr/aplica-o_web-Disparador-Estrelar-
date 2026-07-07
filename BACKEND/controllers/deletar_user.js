const db = require("../database/connection");

async function excluir_user (req, res){
    var {id} = req.params;
    try{
        let usuario_deletado = await db.query(`DELETE FROM usuarios WHERE id = ${id}`)
        console.log(usuario_deletado);

        if (await usuario_deletado.rowCount === 0){
            return res.status(404).json({
                mensagem: "USUARIO NAO ENCONTRADO!"
            });
        };

        return res.status(200).json({
            mensagem: "USUARIO DELETADO!"
        });
    }
    catch (erro){
        console.log(erro);
        return res.status(500).json({
            mensagem: "ERRO INTERNO!"
        });
    };
};

module.exports = {
    excluir_user
};