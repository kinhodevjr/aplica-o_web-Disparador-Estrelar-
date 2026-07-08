import "./App.css"
import { useState } from "react";
function App (){
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")
  const [mensagem, setmensagem] = useState("")
  
  
    async function user_login() {
        console.log(login)
        console.log(senha)

          const api = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "content-Type":"application/json"
              },
            body: JSON.stringify({
              login: login,
              senha: senha
            })
          });

          const dados = await api.json()
          console.log(dados)

          setmensagem(dados.mensagem)
           
    }

  return(
      <div>

        <h1>
          ESTRELAR CONSULTORIA
        </h1>

        <p>
          SISTEMA ESTRELAR
        </p>

        <label>Usuario:</label><br />
        <input type="text" placeholder="Ex: Estrelar.seu nome" onChange={(event) =>{
          setLogin(event.target.value)
        }}/><br />
        <label>Senha:</label><br />
        <input type="password" placeholder="digite sua senha" onChange={(event) =>{
          setSenha(event.target.value)}}/> <br />
        <button onClick={user_login}>ENTRAR</button><br />
        <p>{mensagem}</p>
          
         <p>Desenvolvido por: Marcos</p>

      </div>
  )
}
export default App;