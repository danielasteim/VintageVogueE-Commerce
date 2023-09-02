export const catalog = [
    {
        id: '199401', // yearmonth
        mes: 'January',
        ano: 1994,
        preco: 35,
        arquivo: 'January-1994.jpg',
        qnt: 1,
    },
    {
        id: '200101', //MONTHYEAR
        mes: 'January',
        ano: 2001,
        preco: 40,
        arquivo: 'January-2001.jpg',
        qnt: 2,
    },
    {
        id: '198902', // YEARMONTH
        mes: 'February',
        ano: 1989,
        preco: 85,
        arquivo: 'February-1989.jpg',
        qnt: 1,
    },
    {
        id: '198403', // YEARMONTH
        mes: 'March',
        ano: 1984,
        preco: 85,
        arquivo: 'March-1984.jpg',
        qnt: 1,
    },
    {
        id: '200103', // YEARMONTH
        mes: 'March',
        ano: 2001,
        preco: 55,
        arquivo: 'March-2001.jpg',
        qnt: 3,
    },
    {
        id: '200504', // YEARMONTH
        mes: 'April',
        ano: 2005,
        preco: 70,
        arquivo: 'April-2005.jpg',
        qnt: 1,
    },
    {
        id: '201004', // YEARMONTH
        mes: 'April',
        ano: 2010,
        preco: 30,
        arquivo: 'April-2010.jpg',
        qnt: 2,
    },
    {
        id: '201404', // YEARMONTH
        mes: 'April',
        ano: 2014,
        preco: 25,
        arquivo: 'April-2014.jpg',
        qnt: 4,
    },
    {
        id: '202204', // YEARMONTH
        mes: 'April',
        ano: 2022,
        preco: 10,
        arquivo: 'April-2022.jpg',
        qnt: 12,
    },
    {
        id: '200005', // YEARMONTH
        mes: 'May',
        ano: 2000,
        preco: 60,
        arquivo: 'May-2000.jpg',
        qnt: 1,
    },
    {
        id: '202305', // YEARMONTH
        mes: 'May',
        ano: 2023,
        preco: 5,
        arquivo: 'May-2023.jpg',
        qnt: 37,
    },
    {
        id: '200905', // YEARMONTH
        mes: 'May',
        ano: 2009,
        preco: 30,
        arquivo: 'May-2009.jpg',
        qnt: 2,
    },
    {
        id: '196506', // YEARMONTH
        mes: 'June',
        ano: 1965,
        preco: 80,
        arquivo: 'June-1965.jpg',
        qnt: 2,
    },
    {
        id: '193207', // YEARMONTH
        mes: 'July',
        ano: 1932,
        preco: 150,
        arquivo: 'July-1932.jpg',
        qnt: 1,
    },
    {
        id: '199707', // YEARMONTH
        mes: 'July',
        ano: 1997,
        preco: 150,
        arquivo: 'July-1997.jpg',
        qnt: 1,
    },
    {
        id: '201608', // YEARMONTH
        mes: 'August',
        ano: 2016,
        preco: 25,
        arquivo: 'August-2016.jpg',
        qnt: 1,
    },
    {
        id: '202308', // YEARMONTH
        mes: 'August',
        ano: 2023,
        preco: 5,
        arquivo: 'August-2023.jpg',
        qnt: 41,
    },
    {
        id: '198909', // YEARMONTH
        mes: 'September',
        ano: 1989,
        preco: 70,
        arquivo: 'September-1989.jpg',
        qnt: 1,
    },
    {
        id: '202109', // YEARMONTH
        mes: 'September',
        ano: 2021,
        preco: 15,
        arquivo: 'September-2021.jpg',
        qnt: 7,
    },
    {
        id: '200010', // YEARMONTH
        mes: 'October',
        ano: 2000,
        preco: 55,
        arquivo: 'October-2000.jpg',
        qnt: 2,
    },
    {
        id: '200111', // YEARMONTH
        mes: 'November',
        ano: 2001,
        preco: 120,
        arquivo: 'November-2001.jpg',
        qnt: 100,
    },
    {
        id: '202011', // YEARMONTH
        mes: 'November',
        ano: 2020,
        preco: 15,
        arquivo: 'November-2020.jpg',
        qnt: 13,
    },
    {
        id: '196012',
        mes: 'December',
        ano: 1960,
        preco: 140,
        arquivo: 'December-1960.jpg',
        qnt: 2,
    },
    {
        id: '199712',
        mes: 'December',
        ano: 1997,
        preco: 30,
        arquivo: 'December-1997.jpg',
        qnt: 4,
    },
    {
        id: '202212',
        mes: 'December',
        ano: 2022,
        preco: 10,
        arquivo: 'December-2022.jpg',
        qnt: 19,
    },
];

export function salvarLocalStorage(chave, info) {
    localStorage.setItem(chave, JSON.stringify(info));
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));    
}

export function apagarLocalStorage(chave) {
    localStorage.removeItem(chave);
}

export function desenharProdutoSimples(idProduto, idContainerHTML, quantidadeProduto) {
    const produto = catalog.find((p) => p.id === idProduto);
    const containerProdutosCarrinho =
      document.getElementById(idContainerHTML);
  
    const elementoArticle = document.createElement("article"); //<article></article>
    const articleClasses = [
      "flex",
      "bg-stone-200",
      "rounded-lg",
      "p-1",
      "relative",
      "mb-2",
      "w-96",
    ];
  
    for (const articleClass of articleClasses) {
      elementoArticle.classList.add(articleClass);
    }
    //<article class="flex bg-slate-100 rounded-lg p-1 relative"></article>
  
    const cartaoProdutoCarrinho = `
      <img
        src=".public/img/assets/${produto.arquivo}"
        alt="Carrinho: ${produto.mes} ${produto.ano} Vogue Issue"
        class="h-24 rounded-lg"
      />
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">
        ${produto.mes} ${produto.ano}
        </p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>
      </div>
      <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
          <p id='quantidade-${produto.id}' class='ml-2'>${
            quantidadeProduto
    }</p>
      </div>`;
    //<article class="flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>
  
    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);
  
  }