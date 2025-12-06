import useGerenciadorProdutos from "../hooks/useProduto";
import FormularioProduto from "./FormCadProduto";

const TelaProduto = () => {

const {
    
listaProdutos,
adicionarProduto,
excluirProduto,
navegarParaDetalhes
} = useGerenciadorProdutos();

return (
    
<>
      
<h1 style={{ textAlign: "center" }} tabIndex={1}>
Meus Produtos

</h1>

<div className="box">

<FormularioProduto onAdicionar={adicionarProduto} />

{listaProdutos.length === 0 ? (
<p>Nenhum produto cadastrado.</p>
) : (

listaProdutos.map((produto) => (

<div

key={produto.id}
tabIndex={1}
className="tarefa-box"
role="group"
aria-label={`Produto ${produto.nome}`}

>

<h2 tabIndex={2}>{produto.nome}</h2>

<p tabIndex={2}>ID: {produto.id}</p>
<p tabIndex={2}>Valor: R$ {produto.valor}</p>

<div className="grid-botoes" role="group" aria-label="ações">
<button
className="botao-grid botao-excluir"
aria-label="Excluir produto"
tabIndex={2}
onClick={() => excluirProduto(produto.id)}

>

Excluir
</button>

<button
className="botao-grid botao-editar"
tabIndex={2}
aria-label="Exibir detalhes do produto"
onClick={() => navegarParaDetalhes(produto.id)}

>

Editar
</button>
</div>

</div>
))
)}

</div>

</>

);
};

export default TelaProduto;