import {useContext} from "react";
import { AuthContext } from "../contexts/AuthContext";
function Consultor_tela(){
    var {usuario} = useContext(AuthContext);
    console.log(usuario)
    return(
        
        <h1>Bem-vindo, {usuario.usuario}! </h1>
    
        

    )
};

export default Consultor_tela;