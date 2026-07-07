var express = require("express");
var router = express.Router();
var listar_users = require("../controllers/listar_users")

router.get("/listarUsuario", listar_users.all_users)


module.exports = router;