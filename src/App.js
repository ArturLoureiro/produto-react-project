import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TelaProduto from "./TelaProduto";
import TelaProdutoEditar from "./TelaProdutoEditar";

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