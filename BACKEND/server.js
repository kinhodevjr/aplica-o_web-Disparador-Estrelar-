require("dotenv").config()
var express = require("express");
const cors = require("cors");
var app = express();
//permite em json
app.use(express.json());
//crio a rota, usando APP.(metodo de https, POST,GET,DELETE), app.post("/", )() =>{}) 
// express (ROTA)
app.use(cors());
app.use(require("./routes/listar_users"))
app.use(require("./routes/cadastro"))
app.use(require("./routes/buscar_user"))
app.use(require("./routes/login"))
app.use(require("./routes/editar_user"))
app.use(require("./routes/deletar_user"))
app.use(require("./routes/filtro_equipes"))

app.listen(3000, ()=>{
    console.log("servidor iniciado!")
});



