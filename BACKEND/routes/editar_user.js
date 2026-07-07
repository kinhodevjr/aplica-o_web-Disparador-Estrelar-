var express = require("express")
var router= express.Router();
var editar = require("../controllers/editar_usuarios")

router.put("/editar_user/:id", editar.editar_usuario)

module.exports = router;
