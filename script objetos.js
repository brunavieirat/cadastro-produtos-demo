const produtos = {
  produto1: {
  nome: "Tênis Esportivo",
  preco: 259.9,
  categoria: "Calçados",
  descricao:
    "Tênis confortável para o dia a dia, ideal para caminhadas e treinos leves.",
  imagem: "https://picsum.photos/seed/tenis/400/300",
},
produto3:{
  nome: "Mochila para Notebook",
  preco: 189.5,
  categoria: "Acessórios",
  descricao: "Compartimento acolchoado, resistente à água, cabe notebook de até 15,6\".",
  imagem: "https://picsum.photos/seed/mochila/400/300",
},
produto4: {
  nome: "Fone de Ouvido Bluetooth",
  preco: 149.0,
  categoria: "Eletrônicos",
  descricao: "Cancelamento de ruído, bateria de 20h, conexão bluetooth 5.0.",
  imagem: "https://picsum.photos/seed/fone/400/300",
},
produto5: {
  nome: "Garrafa Térmica",
  preco: 59.9,
  categoria: "Utilidades",
  descricao: "Mantém a temperatura por até 12h, aço inox, 500ml.",
  imagem: "https://picsum.photos/seed/garrafa/400/300",
},
 produto6: {
  nome: "Relógio Digital",
  preco: 219.0,
  categoria: "Acessórios",
  descricao: "Resistente à água, cronômetro, luz de fundo, pulseira ajustável.",
  imagem: "https://picsum.photos/seed/relogio/400/300",
}
};


function criarCardProduto(item) {
  // console.log(item)
  return ` <article class="produto-card">
      <img src=${item.imagem} alt="" />
      <div class="produto-card__conteudo">
        <span class="produto-card__categoria">${item.categoria}</span>
        <h2 class="produto-card__nome">${item.nome}</h2>
        <p class="produto-card__preco">R$ ${item.preco.toFixed(2)}</p>
        <p class="produto-card__descricao">${item.descricao}</p>
        <div class="produto-card__acoes">
          <button type="button" class="btn btn-editar" data-chave="chave">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.85 0 1 1 4 4L7 21l-4 1 1-4Z"/></svg>
            Editar
          </button>
          <button type="button" class="btn btn-excluir" data-chave="chave">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
            Excluir
          </button>
        </div>
      </div>
    </article>
    `;
}

let listaProdutos = document.querySelector("#lista-produtos");

function renderizarProdutos() {
let html = "";
for (let prop in produtos) {
  console.log("prop ", prop);
  console.log("produtos[prop] ", produtos[prop]);
  console.log("produtos[prop].nome ", produtos[prop].nome);

  html += criarCardProduto(produtos[prop]);
  // criarCardProduto()
}

console.log("html ", html);
listaProdutos.innerHTML = html;
}


renderizarProdutos();


