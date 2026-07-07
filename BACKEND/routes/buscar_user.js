var express = require("express");
var router = express.Router();
var buscar_user = require("../controllers/buscar_user");

router.get("/usuario/:id", buscar_user.search_user)

module.exports = router;