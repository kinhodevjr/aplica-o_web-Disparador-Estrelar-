var db = require("../database/connection");

async function search_user (req, res) {
    var id = req.params.id
    var usuario = await db.query(`SELECT * FROM usuarios WHERE id = ${id}`)
    return res.json({
        status: "true",
        mensagem: usuario.rows
    });
};

module.exports = {
    search_user
}