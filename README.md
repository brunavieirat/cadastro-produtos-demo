# 🛍️ Cadastro de Produtos

Projeto de mentoria em vanilla JS (HTML + CSS + JS puro), pensado pra evoluir
junto com o roteiro do roadmap.sh: **Objetos → Arrays → API/CRUD**.

## Como rodar

Basta abrir o arquivo `index.html` no navegador (ou usar a extensão
"Live Server" do VS Code pra recarregar automaticamente a cada mudança).

## Etapa 1: Objetos (arquivos deste projeto)

O que já está pronto:
- Um produto único, guardado num objeto (`script.js`)
- Uma função que transforma esse objeto em um card de HTML
- O card aparece na tela com nome, preço, categoria, descrição e imagem
- Botões de "Editar" e "Excluir" já existem visualmente, mas ainda não
  fazem nada (isso é proposital — é a próxima etapa!)

## Etapa 2: Arrays (próximo passo)

Ideias de evolução:
- Trocar o objeto único por um **array de produtos**
- Usar `.map()` pra transformar cada produto do array em um card
- Fazer o `#lista-produtos` mostrar vários cards ao mesmo tempo
- Adicionar um campo de busca que filtra os produtos por nome/categoria
  (praticando `.filter()`)

## Etapa 3: CRUD completo

Ideias de evolução:
- Criar um formulário de cadastro (inputs de nome, preço, categoria,
  descrição, imagem) que adiciona um novo produto ao array (**Create**)
- Fazer os botões "Editar" e "Excluir" funcionarem de verdade
  (**Update** e **Delete**)
- Guardar a lista de produtos no `localStorage`, pra não perder os dados
  quando a página for recarregada
- Desafio bônus: usar uma API pública gratuita (ex: BrasilAPI/ViaCEP)
  pra autocompletar algum campo do formulário, se quiserem praticar fetch

## Estrutura dos arquivos

```
cadastro-produtos/
├── index.html   → estrutura da página
├── style.css    → estilo visual (cards, cores, layout)
├── script.js    → toda a lógica (objeto, renderização, eventos)
└── README.md    → este arquivo
```
