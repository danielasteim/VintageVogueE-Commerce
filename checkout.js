import { catalog, desenharProdutoSimples, lerLocalStorage, apagarLocalStorage, salvarLocalStorage } from "./src/catalog";

function desenharProdutosCheckout() {
    const idsProdutosCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

    const precoCarrinho = document.getElementById("total-price");
    let precoTotal = 0;

    for (const item in idsProdutosCarrinhoComQuantidade) {
        desenharProdutoSimples(item, "products-container", idsProdutosCarrinhoComQuantidade[item]);
        
        const product = catalog.find((p) => p.id === item);
    
        if (product) {
            precoTotal += product.preco * idsProdutosCarrinhoComQuantidade[item];
        }
    }
  
    precoCarrinho.innerText = `Total: $${precoTotal}`;
}


function finalizarCompra(evento) {
    evento.preventDefault();
    const idsProdutosCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

    if (Object.keys(idsProdutosCarrinhoComQuantidade).length === 0) {
        return;
    }

    for (const idProduto in idsProdutosCarrinhoComQuantidade) {
        const produto = catalog.find((p) => p.id === idProduto);
        if (produto) {
            produto.qnt -= idsProdutosCarrinhoComQuantidade[idProduto];
        }
    }

    const data = new Date();
    const pedidoFeito = {
        dataPedido: data,
        pedido: idsProdutosCarrinhoComQuantidade,
    }

    const pedidoHistorico = lerLocalStorage("historico") ?? [];
    const attHistorico = [pedidoFeito, ...pedidoHistorico];

    salvarLocalStorage("historico", attHistorico);
    apagarLocalStorage("carrinho");
    window.location.href = window.location.origin + './collection.html';
}

desenharProdutosCheckout();

function precoTotal() {

}


document.addEventListener("submit", (evt) => finalizarCompra(evt));
