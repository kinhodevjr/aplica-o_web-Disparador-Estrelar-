import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
function Painel_gestor (){
    const {usuario} = useContext(AuthContext);
    
    return(
        <h1>Bem Vindo, {usuario.cargo}!</h1>
    )
}

export default Painel_gestor;