const mongooseToSwagger = require("mongoose-to-swagger");
const swaggerAutogen = require("swagger-autogen")({
  openapi: "3.0.0", //esta é a versão do openapi que é um conceito do swagger
  language: "pt-BR", // configura a configuração da lingua
});

const outputFile = "./swagger_output.json"; //aqui diz onde vai criar a documentação.
const endpoitsFiles = ["../index.js", "../src/routes.js"]; //neste array vamos colocar strings dos endereçõs onde ficarão configurados todas as rotas do nosso projeto.
//estes arquivos ainda não existem no começo, mas irão aparecer no futuro. Poderia ser o app.js também.

let doc = {
  info: {
    version: "1.0.0",
    title: "API do BoardTasks",
    description: "documentação da API do BoardTasks.",
  },
  servers: [
    {
      url: "http://localhost:4000",
      description: "Servidor localhost.",
    },
    {
      url: "",
      description: "Servidor de produção."
    }
  ],
  consumes: ['application/json'],
  produces: ['application/json'],
  /*components: {
    schema: {
      Usuario: mongooseToSwagger(EsquemaUsuario),
      Tarefa: mongooseToSwagger(EsquemaTarefa)
    }
  }*/


};

swaggerAutogen(outputFile, endpoitsFiles, doc).then(() =>{
  console.log("Documentação do Swagger gerada encontra-se no arquivo em : " + outputFile);
  if(process.env.NODE_ENV !== 'production'){
    require("../index.js");
  }
})
