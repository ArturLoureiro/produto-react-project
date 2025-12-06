import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useGerenciadorProdutos = () => {

const [listaProdutos, setListaProdutos] = useState(() => {
const produtosSalvos = localStorage.getItem("listaProdutos");

return produtosSalvos ? JSON.parse(produtosSalvos) : [];
});

useEffect(() => {
localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
}, [listaProdutos]);

const adicionarProduto = (nome, valor) => {

const novoProduto = {

id: Math.floor(10000 + Math.random() * 90000),
nome: nome,
valor: valor
};

setListaProdutos(produtosAtuais => [...produtosAtuais, novoProduto]);
};

const excluirProduto = (id) => {

const confirmou = window.confirm("Tem certeza que deseja excluir este produto?");

if (confirmou) {
      
const novaLista = listaProdutos.filter((produto) => produto.id !== id);

setListaProdutos(novaLista);
}
};

const navigate = useNavigate();

const navegarParaDetalhes = (id) => {

navigate(`/detalhes/${id}`);
};

const alterarProduto = (produtoEditado) => {

const novaLista = listaProdutos.map((produto) =>
produto.id === Number(produtoEditado.id) ? { ...produto, nome: produtoEditado.nome, valor: produtoEditado.valor } : produto
);

setListaProdutos(novaLista);
window.location.href = "/";
};

return {

listaProdutos,
adicionarProduto,
excluirProduto,
navegarParaDetalhes,
alterarProduto
};
};

export default useGerenciadorProdutos;