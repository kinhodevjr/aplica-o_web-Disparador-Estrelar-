const express = require("express");
const router = express.Router();
const filtro = require("../controllers/filtrar_equipes")

router.get("/equipes", filtro.f_equipe)

module.exports = router;