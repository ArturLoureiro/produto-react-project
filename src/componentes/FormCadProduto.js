import { useState } from "react";

const FormularioProduto = ({ onAdicionar }) => {

const [nome, setNome] = useState("");
const [valor, setValor] = useState("");
const [mensagem, setMensagem] = useState({ texto: "", cor: "" });
const [erros, setErros] = useState({});

const handleAdicionar = () => {
  
if (!nome && !valor) {
setMensagem({ texto: "Nome e valor são obrigatórios.", cor: "red" });
setTimeout(() => setMensagem({ texto: "", cor: "" }), 3000);
    
return;
}

const novosErros = {};
  
if (!nome) {
novosErros.nome = "O nome do produto é obrigatório.";
}

if (!valor) {
novosErros.valor = "O valor do produto é obrigatório.";
}

setErros(novosErros);

if (Object.keys(novosErros).length > 0) {
setTimeout(() => setErros({}), 3000);

return;
}

onAdicionar(nome, valor);
setMensagem({ texto: "Produto adicionado com sucesso!", cor: "green" });
setTimeout(() => {
setMensagem({ texto: "", cor: "" });
}, 3000);
setErros({});
setNome("");
setValor("");
};

return (
    
<>

{mensagem.texto && (
<div style={{ color: mensagem.cor }} role="alert">{mensagem.texto}</div>
)}

<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
<input
type="text"
role="group"
aria-label="Nome do produto"
placeholder="Nome do produto"
value={nome}
tabIndex={1}
onChange={(e) => setNome(e.target.value)}

/>
{erros.nome && <div style={{ color: 'red', fontSize: '0.8rem' }}>{erros.nome}</div>}
<input
type="number"
role="group"
aria-label="Valor do produto"
placeholder="Valor"
value={valor}
tabIndex={1}
onChange={(e) => setValor(e.target.value)}

/>
{erros.valor && <div style={{ color: 'red', fontSize: '0.8rem' }}>{erros.valor}</div>}
<button
tabIndex={1}
onClick={handleAdicionar}

>

Adicionar Produto
</button>

</div>

</>

);
};

export default FormularioProduto;