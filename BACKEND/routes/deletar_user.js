var express = require("express");
var router = express.Router();
var deletar_usuario = require("../controllers/deletar_user");
const { route } = require("./editar_user");

router.delete("/deletar/:id", deletar_usuario.excluir_user)

module.exports = router;