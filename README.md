# AmandaMyskiwPedroso_2bim_JardimDosUrsinhos
# 🧸 Jardim dos Ursinhos

## 📖 Descrição do Projeto

O Jardim dos Ursinhos é uma aplicação web desenvolvida para simular uma loja de amigurumis artesanais. O sistema permite que os usuários visualizem os produtos disponíveis, realizem pesquisas no catálogo e filtrem os itens por categoria, nome e faixa de preço.

O projeto foi desenvolvido com o objetivo de aplicar conceitos de desenvolvimento web utilizando Front-End, Back-End e Banco de Dados Relacional, além da comunicação entre cliente e servidor por meio de requisições HTTP e troca de dados em formato JSON.

---

# 🚀 Tecnologias Utilizadas

## Front-End

* HTML5
* CSS3
* JavaScript

## Back-End

* Node.js
* Express.js

## Banco de Dados

* PostgreSQL

## Controle de Versão

* Git
* GitHub

---

# 📂 Estrutura do Projeto

```text
JardimDosUrsinhos/

├── index.html
├── index.css
│
├── catalogo.html
├── catalogo.css
├── catalogo.js
│
├── server.js
├── package.json
├── .env
│
├── imagens/
│   ├── urso01.jpg
│   ├── urso02.jpg
│   ├── coelho01.jpg
│   └── ...
│
├── banco.sql
│
└── README.md
```

---

# 🎯 Funcionalidades

## Página Inicial

A página inicial apresenta a identidade visual da loja, informações sobre os produtos e navegação para o catálogo.

### Recursos:

* Layout responsivo.
* Navegação entre páginas.
* Apresentação da loja.
* Exibição dos diferenciais dos produtos.

---

## Catálogo de Produtos

O catálogo exibe os produtos cadastrados no banco de dados.

### Informações exibidas:

* Imagem do produto.
* Nome do produto.
* Categoria.
* Preço.
* Quantidade disponível em estoque.

---

## Sistema de Filtros

O usuário pode realizar diferentes consultas ao catálogo:

### Filtrar por categoria

* Ursinhos
* Coelhinhos
* Gatinhos
* Personagens

### Pesquisar por nome

Permite buscar produtos digitando parte do nome.

### Filtrar por faixa de preço

* Até R$ 50,00
* Até R$ 80,00
* Até R$ 100,00

### Ordenação

* Menor preço
* Maior preço

---

# 🔄 Funcionamento do Sistema

O sistema segue uma arquitetura Cliente-Servidor.

Fluxo de funcionamento:

```text
Usuário
   ↓
HTML + CSS
   ↓
JavaScript (Fetch API)
   ↓
Node.js + Express
   ↓
PostgreSQL
   ↓
JSON
   ↓
Tela do usuário
```

Quando o usuário realiza uma pesquisa ou seleciona um filtro:

1. O JavaScript envia uma requisição para o servidor.
2. O servidor processa a solicitação.
3. O PostgreSQL é consultado.
4. Os dados são retornados em formato JSON.
5. O catálogo é atualizado dinamicamente na página.

---

# 🗄️ Banco de Dados

O sistema utiliza duas tabelas relacionadas.

## Tabela Categoria

Armazena as categorias dos produtos.

| Campo          | Tipo    |
| -------------- | ------- |
| id_categoria   | SERIAL  |
| nome_categoria | VARCHAR |

---

## Tabela Produto

Armazena os produtos disponíveis na loja.

| Campo              | Tipo    |
| ------------------ | ------- |
| id_produto         | SERIAL  |
| nome_produto       | VARCHAR |
| preco              | NUMERIC |
| quantidade_estoque | INTEGER |
| imagem             | VARCHAR |
| id_categoria       | INTEGER |

---

## Relacionamento

Uma categoria pode possuir vários produtos.

```text
Categoria (1)
      │
      │
      └──────< Produto (N)
```

---

# 🌐 Rotas da API

## Buscar todos os produtos

```http
GET /api/produtos
```

Retorna todos os produtos cadastrados.

---

## Buscar produtos por categoria

```http
GET /api/produtos/categoria/:id
```

Retorna apenas os produtos da categoria selecionada.

---

## Buscar produto pelo nome

```http
GET /api/produtos/busca/:nome
```

Realiza uma pesquisa utilizando parte do nome do produto.

---

## Filtrar por preço

```http
GET /api/produtos/preco/:valor
```

Retorna produtos com preço menor ou igual ao valor informado.

---

## Ordenar por menor preço

```http
GET /api/produtos/preco-crescente
```

Retorna os produtos em ordem crescente de preço.

---

## Ordenar por maior preço

```http
GET /api/produtos/preco-decrescente
```

Retorna os produtos em ordem decrescente de preço.

---

# ⚙️ Como Executar o Projeto

## 1. Clonar o Repositório

```bash
git clone URL_DO_REPOSITORIO
```

---

## 2. Instalar as Dependências

```bash
npm install
```

---

## 3. Configurar o Arquivo .env

Criar um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=jardim_dos_ursinhos
DB_USER=postgres
DB_PASSWORD=sua_senha
```

---

## 4. Executar o Servidor

```bash
node server.js
```

Servidor disponível em:

```text
http://localhost:3001
```

---

## 5. Abrir o Sistema

Abra o arquivo:

```text
index.html
```

ou utilize uma extensão como Live Server.

---

# 🔮 Melhorias Futuras

As próximas versões do sistema poderão incluir:

* Carrinho de compras.
* Sistema de encomendas.
* Página individual dos produtos.
* Área administrativa.
* Cadastro de clientes.
* Controle de estoque em tempo real.
* Finalização de pedidos.
* Histórico de compras.

---

# 👩‍💻 Desenvolvedora

**Amanda Myskiw Pedroso**

Projeto desenvolvido para fins acadêmicos na disciplina de Desenvolvimento Web.
