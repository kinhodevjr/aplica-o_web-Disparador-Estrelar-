import { createContext, useState } from "react";
var AuthContext = createContext();

function AuthProvider({children}){
    const [usuario, setUsuario] = useState(null);
    return(
        <AuthContext.Provider value={{ usuario, setUsuario}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext, AuthProvider};