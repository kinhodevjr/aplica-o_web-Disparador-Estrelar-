import "./Painel_consultor.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Painel_consultor() {
  const { usuario } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("manual");

  return (
    <div className="consultor-container">
      {/* ============ SIDEBAR ============ */}
      <aside className="consultor-sidebar">
        {/* Logo */}
        <div className="sidebar-logo">
          <h4 className="sidebar-logo-text">{usuario.usuario.split(".")[1]}</h4>
        </div>

        {/* Menu */}
        <nav className="sidebar-menu">
          <a
            onClick={() => setActiveTab("manual")}
            className={activeTab === "manual" ? "active" : ""}
          >
            Manual
          </a>
          <a
            onClick={() => setActiveTab("massa")}
            className={activeTab === "massa" ? "active" : ""}
          >
            Em massa
          </a>
          <a
            onClick={() => setActiveTab("conexao")}
            className={activeTab === "conexao" ? "active" : ""}
          >
            Conexão
          </a>
          <a
            onClick={() => setActiveTab("agendamentos")}
            className={activeTab === "agendamentos" ? "active" : ""}
          >
            Agendamentos
          </a>
        </nav>


      </aside>

      {/* ============ MAIN CONTENT ============ */}
      <main className="consultor-main">
        {/* Header */}
        <header className="consultor-header">
          <h1 className="header-title">
            {activeTab === "manual" && "Manual"}
            {activeTab === "massa" && "Em massa"}
            {activeTab === "conexao" && "Conexão"}
            {activeTab === "agendamentos" && "Agendamentos"}
          </h1>
        </header>

        {/* Content */}
        <div className="consultor-content">
          {activeTab === "manual" && (
            <section className="content-section">
              {<h1>Oi, teste!</h1>}
            </section>
          )}

          {activeTab === "massa" && (
            <section className="content-section">
            </section>
          )}

          {activeTab === "conexao" && (
            <section className="content-section">
        
            </section>
          )}

          {activeTab === "agendamentos" && (
            <section className="content-section">
               <div className="em_desenvolvimento">
                <span className="em_des_badge">Em Desenvolvimento</span>
                <p className="em_des_desc">Está sendo desenvolvido para oferecer a melhor experiência. para Sugestoes fale com a isabelly ou Marcos...</p>
</div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default Painel_consultor;