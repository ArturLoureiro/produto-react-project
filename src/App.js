import { HashRouter as Router, Routes, Route } from "react-router-dom";
import TelaProduto from "./componentes/TelaProduto";
import TelaProdutoEditar from "./componentes/TelaProdutoEditar";

function App() {
  return (
    // ⚠️ CORREÇÃO: Usando HashRouter para compatibilidade com Vercel/GitHub Pages
    <Router>
      <Routes>
        {/* Rota principal para listagem/cadastro */}
        <Route path="/" element={<TelaProduto />} />

        {/* Rota para edição/detalhes de um produto específico. 
            O ":id" é um parâmetro dinâmico. */}
        <Route path="/detalhes/:id" element={<TelaProdutoEditar />} />
      </Routes>
    </Router>
  );
}

export default App;