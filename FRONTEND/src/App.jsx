import Login from "./pages/Login";
import Consultor_tela from "./pages/painel_consultor";
import Painel_gestor from "./pages/Painel_admin";
import{BrowserRouter, Routes, Route} from "react-router-dom";

function App (){
  return(
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />} 
      />
      <Route path="/consultor" element={<Consultor_tela />} 
      />
      <Route path="/admin" element={<Painel_gestor />} />
     </Routes>
  
   </BrowserRouter>
  )
}
export default App;