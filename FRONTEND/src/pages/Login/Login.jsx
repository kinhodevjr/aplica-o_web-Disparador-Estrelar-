import "./Login.css";
import { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"
import {AuthContext} from "../../contexts/AuthContext"
function Login(){
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate();
    const {setUsuario} = useContext(AuthContext);
   
    async function user_login() {
            try{
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
                        setUsuario(dados)

                            if (dados.cargo === "Consultor"){
                                navigate("/consultor")
                            }

                            if (dados.cargo === "Gestor"){
                                navigate("/admin")
                            }
                    }
                    catch(err){
                        console.error(err)
                        setMensagem("Erro com servidor, fale com suporte")
                    }
    }


  return(
      <div className="login-page">

        <div className="login-brand">
          <div className="login-brand-top">
            <span className="login-mark-name">Estrelar Consultoria</span>
          </div>

          <div className="login-brand-main">
            <p className="login-brand-eyebrow">Sistema Estrelar</p>
            <h1 className="login-brand-title">
              Gestão de Disparos para <span>consultores e gestores</span>
            </h1>
            <p className="login-brand-desc">
              Acesse sua conta para fazer Disparos, importar leads e processos em um único painel.
            </p>
          </div>

          <p className="login-brand-bottom">© {new Date().getFullYear()} Estrelar Consultoria</p>
        </div>

        <div className="login-form-side">
          <div className="login-card">
            <div className="login-card-header">
              <h2 className="login-title">Acessar conta</h2>
              <p className="login-subtitle">Informe seus dados para continuar</p>
            </div>

            <div className="login-field">
              <label className="login-label">Usuário</label>
              <input
                className="login-input"
                type="text"
                placeholder="Digite seu login"
                onChange={(event) => {
                  setLogin(event.target.value)
                }}
              />
            </div>

            <div className="login-field">
              <label className="login-label">Senha</label>
              <input
                className="login-input"
                type="password"
                placeholder="Digite sua senha"
                onChange={(event) => {
                  setSenha(event.target.value)
                }}
              />
            </div>

            <button className="login-button" onClick={user_login}>ENTRAR</button>

            <p className="login-mensagem-erro">{mensagem}</p>

            <div className="login-footer">
              <p className="login-referencia">Desenvolvido por:</p>
              <p className="login-creditos">Isabely e Marcos</p>
            </div>
          </div>
        </div>

      </div>
  )
};
export default Login;