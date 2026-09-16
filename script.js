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
// Função que transforma UM objeto de produto em HTML
// ===================================================
// Ela recebe um objeto de produto e devolve o HTML do card pronto.
// Como a função não depende de qual produto é, podemos chamá-la
// quantas vezes quisermos, passando um objeto diferente cada vez.

function criarCardProduto(produto) {
  // Formata o preço no padrão brasileiro (R$ 259,90)
  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return `
    <article class="produto-card">
      <img src="${produto.imagem}" alt="${produto.nome}" />
      <div class="produto-card__conteudo">
        <span class="produto-card__categoria">${produto.categoria}</span>
        <h2 class="produto-card__nome">${produto.nome}</h2>
        <p class="produto-card__preco">${precoFormatado}</p>
        <p class="produto-card__descricao">${produto.descricao}</p>
        <div class="produto-card__acoes">
          <button class="btn btn-editar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.85 0 1 1 4 4L7 21l-4 1 1-4Z"/></svg>
            Editar
          </button>
          <button class="btn btn-excluir">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
            Excluir
          </button>
        </div>
      </div>
    </article>
  `;
}

// ===================================================
// Colocando os cards na tela
// ===================================================
// Por enquanto, sem array, a gente "monta" o HTML final juntando
// (concatenando, com o +) o resultado de cada chamada da função.
// Isso funciona, mas dá pra ver que é repetitivo — é exatamente
// esse tipo de repetição que arrays + .map() vão resolver depois.

const listaProdutos = document.querySelector("#lista-produtos");

listaProdutos.innerHTML =
  criarCardProduto(produto) +
  criarCardProduto(produto2) +
  criarCardProduto(produto3) +
  criarCardProduto(produto4) +
  criarCardProduto(produto5) +
  criarCardProduto(produto6);

// ===================================================
// Botões de Editar e Excluir
// ===================================================
// Por enquanto eles são só visuais (fazem parte do card em HTML/CSS),
// sem nenhum comportamento em JS ainda — isso vai ser implementado
// mais pra frente, na Etapa 3 (CRUD).

// ===================================================
// 🎯 DESAFIO (opcional) pra treinar objetos:
// ===================================================
// 1. Crie um sétimo objeto ("produto7") com outro produto seu.
// 2. Adicione ele na lista lá em cima (junte com um "+ criarCardProduto(produto7)").
// 3. Tente mudar uma propriedade de algum objeto (ex: o preço)
//    e veja o card atualizar quando a página recarregar.
