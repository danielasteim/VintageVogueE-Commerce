import { catalog } from "./catalog";
import { inicializarCarrinho, adicionarAoCarrinho } from "./cart";

export function renderCatalog(list) {
    for (const iten of list) {
        const cartaoProduto = `<div class="group rounded-lg text-center shadow-xg shadow-slate-400 w-36 m-2 p-2 content-center bg-rose-950 text-white flex flex-col ${iten.ano} ${iten.mes}" id="card-produto-${iten.id}"> 
            <img src="./assets/img/${iten.arquivo}" alt="Vogue ${iten.mes} ${iten.ano} Issue" class="hover:scale-90 duration-500 ronded-lg"style="height: 175px">
            <p class="text-xs font-bold p-1">${iten.mes} ${iten.ano}</p>
            <p class="text-xs">$${iten.preco}</p>
            <button id="add-${iten.id}" class="bg-white text-sm text-slate-500 hover:bg-orange-500 mt-1 b-0"><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;

        document.getElementById("container-produto").innerHTML += cartaoProduto;
    }

    for (const item of catalog) {
        document.getElementById(`add-${item.id}`)
            .addEventListener("click", () => adicionarAoCarrinho(item.id));
    }
    
}