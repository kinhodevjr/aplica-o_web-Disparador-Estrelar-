var express = require("express");
var router = express.Router();
var buscarLogin = require("../controllers/login");

router.post("/login", buscarLogin.login)

module.exports = router;