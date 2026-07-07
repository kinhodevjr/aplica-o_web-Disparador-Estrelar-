import "./App.css";
import { useState } from "react";
function App(){
  const [login, setLogin] = useState("");
  const [senha, setSenha] =useState("");


  async function user_login (){
    console.log(login)
    console.log (senha)
    const api = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers:{
        "content-Type":"application/json"
      },
      body: JSON.stringify({
        login: login,
        senha: senha
      }),
      
    });
    const dados = await api.json()
    console.log(dados)
  }
  return (
      
    <div>
    <h1> Sistema Estrelar </h1>
    
    <p>ESTRELAR CONSULTORIA</p>

    <label>USUARIO: </label><br/>
    <input type="text" placeholder="LOGIN" onChange={(event) =>{
      setLogin(event.target.value)
    }}/><br/>
    <label>SENHA: </label><br/>
    <input type="password" placeholder="SENHA" onChange={(event) =>{
      setSenha(event.target.value)
    }}/><br />
    <button onClick={user_login}>ENTRAR</button>
    
    
    
    </div>

  );
}
export default App;