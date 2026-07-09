import "./Login.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
function Login(){
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate();
   
    async function user_login() {
         console.log(login)
        console.log(senha)

            const api = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {"content-Type":"application/json"},
            body: JSON.stringify({
                login: login,
                senha: senha
            })
        })

        const dados = await api.json()
        console.log(dados)
        setMensagem(dados.mensagem)

        if (dados.cargo === "Consultor"){
            navigate("/consultor")
        }

        if (dados.cargo === "Gestor"){
            navigate("/admin")
        }

    }
  return(
      <div>
        <h1>ESTRELAR CONSULTORIA</h1>
        <p>Sistema Estrelar</p>

        <label>USUARIO: </label>
        <input type="text" placeholder="Digite seu login" onChange={(event) =>{setLogin(event.target.value)}} />
        <label>SENHA: </label>
        <input type="password" placeholder="Digite sua senha" onChange={(event)=>{setSenha(event.target.value)}}></input>
        <button onClick={user_login}>ENTRAR</button><br />
        <p className="mensagem_erro">{mensagem}</p>
        <p>desenvolvido por:<p /> <p></p>Estrelar Consultoria (equipe de T.i)</p>
      </div>
  )
};
export default Login;