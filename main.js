
import { renderCatalog } from "./src/products";
import { inicializarCarrinho, renderizarProdutosCarrinho, AtualizarPrecoTotal } from "./src/cart";
import { searchInput, Search } from "./src/search";
import { catalog } from "./src/catalog";


document.addEventListener("DOMContentLoaded", function () {
    renderCatalog(catalog);
    searchInput();
    Search();
    renderizarProdutosCarrinho();
    inicializarCarrinho();
    AtualizarPrecoTotal();
});

