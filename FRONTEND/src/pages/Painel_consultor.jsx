import {useContext} from "react";
import { AuthContext } from "../contexts/AuthContext";
function Consultor_tela(){
    var {usuario} = useContext(AuthContext);
    console.log(usuario)
    return(
        
    <h1>Seja Bem vindo, {usuario.usuario.split(".")[1]}! || Estamos preparando voce dentro do Sistema!</h1>
    
        

    )
};

export default Consultor_tela;