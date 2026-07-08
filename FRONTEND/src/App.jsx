import "./App.css";
import { useState } from "react";
function App(){
  const [login, SetLogin] =  useState("")
  const [senha, setSenha] = useState("")
  async function login_f() {
    console.log(login),
    console.log(senha)
    const dados_api = await fetch("http://localhost:3000/login",{
      method: "POST",
      headers: {
        "content-Type":"application/json"
      },
      body: JSON.stringify({
        login: login,
        senha: senha
      })
    })

    const api = await dados_api.json()
    console.log(api)
  }
  return(
      <div>
        <h1>SISTEMA ESTRELAR</h1>
        <p>Estrelar Consultoria</p>

        <label>USUARIO:</label>
        <input type="text" placeholder="Ex: Estrelar.seu_nome" onChange={(event) =>{SetLogin(event.target.value)}} />
        <label>SENHA:</label>
        <input type="password" placeholder="Digite sua senha!" onChange={(event) =>{setSenha(event.target.value)}}/>
        <button onClick={login_f}>ENTRAR</button>

      </div>
   )
}
export default App;