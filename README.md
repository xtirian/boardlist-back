# Board Task Back
Este projeto é o backend do exercicio de criar um Boad Tasks feito para o curso do Rubens Flinco da escola DNC



## Table of Contents

- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Iniciando este projeto](#iniciando-este-projeto)
- [Configurando este projeto](#configuração-do-projeto)

## Tecnologias utilizadas

- Nodejs
- Express
- Swagger
- DotEnv
- Mongoose
- MongoDB
- Cors

## Iniciando este projeto

1) Primeiro você precisa colocar este repositório em seu computador.
2) Voce precisa copiar o rquivo `Exemplo.env` que está na raiz do projeto e renomeá-lo para `.env` para que as variáveis de ambiente sejam definidas.
3) Depois é só executar o compando ```$ npm install``` no terminal na pasta raiz do projeto.
4) Em seguida, você pode executar o comando ```$ npm run dev``` no terminal na pasta raiz do projeto, para iniciar o servidor back-end.
5) Depois entre na documentação da API é só acessar em seu navegador o endereço ```http://localhost:4000/```



## Configuração do Projeto

### Script
Primeiro item adicionado foi o script
```json
"scripts": {
    "dev": "npx nodemon ./bin/www" 
  },
```
A inserção deste script serve para rodar o projeto (como o npm start), mas o nodemon facilita o desenvolvimento do projeto pois ele atualiza automaticamente as autreçaões inseirdas no projeto sem precisarmos ficar reinicializando toda hora o projeto manualmente.

### Swagger
Realizo a instação do Swagger Fará a documentação automática da API
```bash
$ npm install swagger-autogen swagger-ui-express
```
### Mongoose
O Mongoose será a biblioteca que de fato faz a conexão com o banco de dados:
```bash
$ npm install mongoose mongoose-to-swagger
```

O Mongoose-to-swagger faz a tradução dos esquemas de bancos de dados pro swagger

### Cors
O Cors serve para evitar problemas de cors entre o frontend e o back end

```bash
$ npm install cors
```
Depois importamos o Cors no App.js

```js
const cors = require('cors');

//[...]

app.use(cors());
```


### Dotenv
Serve para usarmos o arquivo "*.env" que é um arquivo de variáveis de ambiente.

```bash
$ npm install dotenv
```
Para configura esta dependencia, vamos ao App.js

```js
const app = express();

require('dotenv').config();
```

Depois de fazer esta configuração, já é possivel criar um arquivo ".env" e inserir as variaveis de ambiente

Para chamar uma variável de ambiente que está no arquivo **Dotenv**, vamos ao arquivo que queremos chamar e usar o seguinte comando.

```js
//este comando foi inserido no users.js
router.get("/", function (req, res, next) {
  console.log("var: ", process.env.TEST); //este comando é o responsável por processar a variavel de ambiente.
  res.send("respond with a resource ");
});

```