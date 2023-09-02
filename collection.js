import { lerLocalStorage, desenharProdutoSimples } from "./src/catalog";

function criarHistoricoDePedido(pedidoComData) {
    const elementoPedido = `
        <p class="bg-rose-950 text-md text-orange-500 font-bold mt-4 rounded p-2">${new Date(pedidoComData.dataPedido).toLocaleDateString('pt-BR')}</p>
        <section id="container-pedidos-${pedidoComData.dataPedido}" class="bg-slate-300 p-2 rounded-lg"></section>
    `;

    const main = document.getElementsByTagName("main")[0];
    main.innerHTML += elementoPedido;

    for (const idProduto in pedidoComData.pedido) {
        desenharProdutoSimples(idProduto, `container-pedidos-${pedidoComData.dataPedido}`, pedidoComData.pedido[idProduto]);
    }
}

function renderizarCollection() {
    const historico = lerLocalStorage("historico") ?? {};

    for (const iten in historico) {
        const pedidoComData = historico[iten];
        criarHistoricoDePedido(pedidoComData);
    }
}

renderizarCollection();
