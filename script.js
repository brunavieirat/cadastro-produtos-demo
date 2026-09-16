// ===================================================
// ETAPA 1: OBJETOS
// ===================================================
// Cada produto é um objeto separado, guardado numa variável.
// Cada característica do produto é uma propriedade (chave: valor).
//
// Repare que os 6 objetos abaixo têm exatamente as MESMAS propriedades
// (nome, preco, categoria, descricao, imagem) — só os valores mudam.
// Guarde essa observação: quando chegarmos em ARRAYS (próxima etapa),
// vamos ver que dá pra guardar esses 6 objetos numa lista só, em vez
// de ter 6 variáveis soltas como agora.

const produto = {
  nome: "Tênis Esportivo",
  preco: 259.9,
  categoria: "Calçados",
  descricao:
    "Tênis confortável para o dia a dia, ideal para caminhadas e treinos leves.",
  imagem: "https://picsum.photos/seed/tenis/400/300",
};

const produto2 = {
  nome: "Camiseta Estampada",
  preco: 79.9,
  categoria: "Vestuário",
  descricao: "Camiseta 100% algodão, estampa exclusiva, caimento confortável.",
  imagem: "https://picsum.photos/seed/camiseta/400/300",
};

const produto3 = {
  nome: "Mochila para Notebook",
  preco: 189.5,
  categoria: "Acessórios",
  descricao: "Compartimento acolchoado, resistente à água, cabe notebook de até 15,6\".",
  imagem: "https://picsum.photos/seed/mochila/400/300",
};

const produto4 = {
  nome: "Fone de Ouvido Bluetooth",
  preco: 149.0,
  categoria: "Eletrônicos",
  descricao: "Cancelamento de ruído, bateria de 20h, conexão bluetooth 5.0.",
  imagem: "https://picsum.photos/seed/fone/400/300",
};

const produto5 = {
  nome: "Garrafa Térmica",
  preco: 59.9,
  categoria: "Utilidades",
  descricao: "Mantém a temperatura por até 12h, aço inox, 500ml.",
  imagem: "https://picsum.photos/seed/garrafa/400/300",
};

const produto6 = {
  nome: "Relógio Digital",
  preco: 219.0,
  categoria: "Acessórios",
  descricao: "Resistente à água, cronômetro, luz de fundo, pulseira ajustável.",
  imagem: "https://picsum.photos/seed/relogio/400/300",
};

// Pra acessar uma propriedade do objeto, usamos ponto: produto.nome
console.log("Produto cadastrado:", produto.nome);

// ===================================================
// 🛠️ SUA VEZ: função que transforma UM objeto de produto em HTML
// ===================================================
// Essa função deve receber um objeto de produto (como os de cima)
// e devolver uma STRING de HTML representando o card desse produto.
//
// Dica: use template literals (aquelas crases ``) com interpolação
// (${"${produto.nome}"}) pra montar o HTML usando as propriedades
// do objeto: produto.nome, produto.preco, produto.categoria,
// produto.descricao, produto.imagem.
//
// O HTML final deve seguir essa estrutura (as classes já existem
// no style.css, então usando elas certinho o visual já vem pronto):
//
//   <article class="produto-card">
//     <img src="..." alt="..." />
//     <div class="produto-card__conteudo">
//       <span class="produto-card__categoria">...</span>
//       <h2 class="produto-card__nome">...</h2>
//       <p class="produto-card__preco">...</p>
//       <p class="produto-card__descricao">...</p>
//       <div class="produto-card__acoes">
//         <button class="btn btn-editar">Editar</button>
//         <button class="btn btn-excluir">Excluir</button>
//       </div>
//     </div>
//   </article>
//
// Dica bônus: dá pra formatar o preço em Real assim:
// produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

function criarCardProduto(produto) {
  // TODO: escreva aqui o "return" com o HTML do card (vamos fazer isso juntas!)
}

// ===================================================
// Colocando os cards na tela
// ===================================================
// Depois que a função criarCardProduto estiver pronta, descomente
// as linhas abaixo pra ver os 6 produtos aparecerem na página.

const listaProdutos = document.querySelector("#lista-produtos");

// listaProdutos.innerHTML =
//   criarCardProduto(produto) +
//   criarCardProduto(produto2) +
//   criarCardProduto(produto3) +
//   criarCardProduto(produto4) +
//   criarCardProduto(produto5) +
//   criarCardProduto(produto6);

// ===================================================
// Botões de Editar e Excluir
// ===================================================
// Por enquanto eles são só visuais (fazem parte do card em HTML/CSS),
// sem nenhum comportamento em JS ainda — isso vai ser implementado
// mais pra frente, na Etapa 3 (CRUD).
