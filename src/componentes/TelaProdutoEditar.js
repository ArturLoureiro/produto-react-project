import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGerenciadorProdutos from "../hooks/useProduto";

const TelaProdutoEditar = () => {

const { id } = useParams();
const navigate = useNavigate();

const {

listaProdutos,
alterarProduto
} = useGerenciadorProdutos();

const [nome, setNome] = useState("");
const [valor, setValor] = useState("");
const [erros, setErros] = useState({});
const [mensagem, setMensagem] = useState({ texto: "", cor: "" });

useEffect(() => {

const produtoParaEditar = listaProdutos.find(p => p.id.toString() === id);

if (produtoParaEditar) {
setNome(produtoParaEditar.nome);
setValor(produtoParaEditar.valor);

} else {
navigate("/");
}

}, [id, listaProdutos, navigate]);

const handleSalvar = () => {

const produtoOriginal = listaProdutos.find(p => p.id.toString() === id);
    
if (produtoOriginal.nome === nome && produtoOriginal.valor === valor) {
alert("Nenhuma alteração foi feita.");
    
return;
}

if (!nome && !valor) {
setMensagem({ texto: "Nome e valor são obrigatórios.", cor: "red" });
setTimeout(() => setMensagem({ texto: "", cor: "" }), 3000);

return
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

const confirmou = window.confirm("Deseja salvar as alterações neste produto?");
    
if (confirmou) {
const produtoEditado = {
id,
nome,
valor,
};
alterarProduto(produtoEditado);
}
};

return (

<>

<h1 style={{ textAlign: "center" }} tabIndex={1}>
Editar Produto

</h1>

<div className="box">
{mensagem.texto && (
<div style={{ color: mensagem.cor }} role="alert">{mensagem.texto}</div>
)}
<p>Editando produto ID: {id}</p>
<input
type="text"
placeholder="Nome do produto"
value={nome}
onChange={(e) => setNome(e.target.value)}

/>
{erros.nome && <div style={{ color: 'red', fontSize: '0.8rem' }}>{erros.nome}</div>}

<input
type="number"
placeholder="Valor"
value={valor}
onChange={(e) => setValor(e.target.value)}

/>
{erros.valor && <div style={{ color: 'red', fontSize: '0.8rem' }}>{erros.valor}</div>}

<div className="grid-botoes">
<button className="botao-salvar" onClick={handleSalvar}>Salvar Alterações</button>
<button className="botao-cancelar" onClick={() => navigate("/")}>Cancelar</button>
</div>
</div>

</>
);
};

export default TelaProdutoEditar;