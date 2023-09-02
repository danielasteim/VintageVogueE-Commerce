import { catalog, salvarLocalStorage, lerLocalStorage } from "./catalog";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

function abrirCarrinho() {
  document.getElementById("cart").classList.add("right-[0px]");
  document.getElementById("cart").classList.remove("right-[-360px]");
}

function fecharCarrinho() {
  document.getElementById("cart").classList.remove("right-[0px]");
  document.getElementById("cart").classList.add("right-[-360px]");
}

function irParaCheckout() {
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }

  window.location.href = window.location.origin + './checkout.html';
  checkoutButton = document.getE
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("close-cart");
  const botaoAbrirCarrinho = document.getElementById("open-cart");
  const botaoCheckout = document.getElementById("buy-cart");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
  botaoCheckout.addEventListener("click", irParaCheckout);
  
}

function removerDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQuantidade[idProduto];
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  AtualizarPrecoTotal();
  renderizarProdutosCarrinho();
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  AtualizarPrecoTotal();
  atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto) {
  if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
    removerDoCarrinho(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  AtualizarPrecoTotal();
  atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutoNoCarrinho(idProduto) {
  const produto = catalog.find((p) => p.id === idProduto);
  const containerProdutosCarrinho =
    document.getElementById("cart-products");

  const elementoArticle = document.createElement("article"); //<article></article>
  const articleClasses = [
    "flex",
    "bg-slate-100",
    "rounded-lg",
    "p-1",
    "relative",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }
  //<article class="flex bg-slate-100 rounded-lg p-1 relative"></article>

  const cartaoProdutoCarrinho = `<button id="remover-item-${produto.id}" class="absolute top-0 right-2">
    <i 
      class="fa-solid fa-rectangle-xmark hover:text-red-200 text-rose-950">
    </i>
    </button>
    <img
      src="./assets/img/${produto.arquivo}"
      alt="Carrinho: ${produto.mes} ${produto.ano} Vogue Issue"
      class="h-16 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm font-bold">
      ${produto.mes} ${produto.ano}
      </p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <button id='decrementar-produto-${produto.id}'>-</button>
        <p id='quantidade-${produto.id}' class='p-1 m-1 text-xs font-extrabold'>${
    idsProdutoCarrinhoComQuantidade[produto.id]
  }</p>
        <button class='mr-2' id='incrementar-produto-${produto.id}'>+</button>
    </div>`;
  //<article class="flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);

  document
    .getElementById(`decrementar-produto-${produto.id}`)
    .addEventListener("click", () => decrementarQuantidadeProduto(produto.id));

  document
    .getElementById(`incrementar-produto-${produto.id}`)
    .addEventListener("click", () => incrementarQuantidadeProduto(produto.id));

  document
    .getElementById(`remover-item-${produto.id}`)
    .addEventListener("click", () => removerDoCarrinho(produto.id));
}

export function renderizarProdutosCarrinho() {
  const containerProdutosCarrinho =
    document.getElementById("cart-products");
  containerProdutosCarrinho.innerHTML = "";

  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoNoCarrinho(idProduto);
  }
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoComQuantidade) {
    incrementarQuantidadeProduto(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  desenharProdutoNoCarrinho(idProduto);
}

export function AtualizarPrecoTotal() {
  const precoCarrinho = document.getElementById("total-price");
  let precoTotal = 0;

  for (const produtoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
    precoTotal +=
      catalog.find((p) => p.id === produtoNoCarrinho).preco *
      idsProdutoCarrinhoComQuantidade[produtoNoCarrinho];
  }

  precoCarrinho.innerText = `Total: $${precoTotal}`;
}
