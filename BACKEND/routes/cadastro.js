var express = require("express");
var router = express.Router();
var registrar_usuario = require("../controllers/cadastro")


router.post("/cadastro", registrar_usuario.registro)


module.exports = router;