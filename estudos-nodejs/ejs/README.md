# Passo a passo

- [x] Iniciar projeto (npm init -y)
- Instalar dependências
- [x] express (npm install express)
- [x] nodemon (npm install nodemon -D)
- [x] ejs (npm install ejs)
- [x] Criar um arquivo **_.gitignore_** e passar a pasta **node_modules/**
- [x] Na raiz do projeto criar o arquivo **_app.js_**

## / 📂

### app.js 📖

- [x] Importar módulo express
- const express = require('express');
- [x] Criar uma aplicação express, que é uma função, e armazená-la em uma variável.
- const app = express();
- [x] Criar uma porta específica para o nosso servidor.
- const port = process.env.PORT || 3000;
- Quando subirmos nossa aplicação, não devemos deixar uma porta estática. A porta usada será aquela que estiver disponível no ambiente que fizermos o nosso deploy.
- [x] Nosso servidor precisa ficar 'ouvindo' conexões. Será passada a porta que especificamos acima.
- app.listen(port)
- Podemos passar uma função callback e imprimir uma mensagem no nosso terminal para testarmos se nossa conexão deu certo.
- app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  });

## / 📂

### package.json 📖

- [x] Criar nosso script 'start' para rodar nosso nodemon.
- "start": "nodemon app.js"
- [x] No terminal, rodar o comando: npm start

## Arquitetura MVC

- [x] Na raiz do projeto, criar uma pasta chamada **_models/_**
- [x] Na raiz do projeto, criar uma pasta chamada **_views/_**
- [x] Na raiz do projeto, criar uma pasta chamada **_controllers/_**
- [x] Na raiz do projeto, criar uma pasta chamada **_routes/_**
- [x] Na raiz do projeto, criar uma pasta chamada **_public/_**
- [x] Na raiz do projeto, criar uma pasta chamada **_database/_**

## EJS

- Arquivo JavaScript dentro do HTML.

## views/ 📂

- [x] Criar uma pasta chamada partials.
- [x] Criar um arquivo chamado **_index.ejs_**

## views/ 📂

### index.ejs 📖

- [x] Iniciar uma estrutura básica em HTML.
- [x] Com uma tag **h1** escrito: 'Dari+'

## EJS

- O back-end será o responsável pela exibição da minha página.

## / 📂

### app.js 📖

- [x] Setar configurações:
- app.set('view engine', 'ejs');
- Informar ao express que iremos usar uma **_view engine_** para renderizar nossas páginas HTML e que faremos uso da extensão **_.ejs_**
- [ ] Criar uma rota do tipo **GET** e enviar como resposta nossa página index.
- app.get('/', (request, response) => {
  return response.render('index');
  });

## EJS

- Por padrão o EJS irá procurar o diretório **_views/_**. Caso este esteja dentro de uma outra pasta, será necessário informar o novo caminho.
- Ao pedirmos que nossa página seja renderizada, não é necessário informar a extensão **_.ejs_**, porque já setamos acima que iriamos trabalhar com esse tipo.
- return response.render('nomeDoArquivo')

### Navegador

- [x] No seu navegador favorito, acessar o endereço **http://localhost:3000**

## / 📂

### app.js 📖

- [x] Importar o módulo nativo **path**
- const path = require('path');
- [x] Informar que iremos servir/usar arquivos estáticos, informando a pasta que estarão armazenados.
- app.use(express.static(path.join(\_\_dirname, 'public')));

## public/ 📂

- [x] Criar uma pasta chamada **_styles/_**
- [x] Criar uma pasta chamada **_scripts/_**
- [x] Criar uma pasta chamada **_images/_**

## Adriana

- [x] Não falar palavras feias.
- [x] Para cada palavra feia, pagar $5 reais para o Dari.

## public/styles/ 📂

- [x] Criar um arquivo **_style.css_**

## public/scripts/ 📂

- [x] Criar um arquivo **_main.js_**

## views/ 📂

### index.ejs 📖

- [x] Linkar nosso **_style.css_**
- [x] Linkar nosso **_main.js_**

## public/styles/ 📂

### style.css 📖

- [x] Alterar o background do body

## public/scripts/ 📂

### main.js 📖

- [x] Criar um console.log('Javascript')

### Navegador

- [x] Abrir o devtools
