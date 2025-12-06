import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TelaProduto from "./componentes/TelaProduto";
import TelaProdutoEditar from "./componentes/TelaProdutoEditar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaProduto />} />

        <Route path="/detalhes/:id" element={<TelaProdutoEditar />} />
      </Routes>
    </Router>
  );
}

export default App;