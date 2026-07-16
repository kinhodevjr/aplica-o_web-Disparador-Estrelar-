import Login from "./pages/Login/Login";
import Consultor_tela from "./pages/painel_consultor";
import Painel_gestor from "./pages/Painel_admin";
import{BrowserRouter, Routes, Route} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function App (){
  return(
    <AuthProvider>
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />} 
      />
      <Route path="/consultor" element={<Consultor_tela />} 
      />
      <Route path="/admin" element={<Painel_gestor />} />
     </Routes>
  
   </BrowserRouter>
   </AuthProvider>
  )
}
export default App;