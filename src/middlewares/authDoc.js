async function authDocProducao(req, res, next) {
  const { senha } = req.body;

  if (req.headers.host.includes("localhost") || req.originalUrl !== "/doc/") {
    //diz de qual dominio a requisição está vindo
    //aqui é quando o usuário está acessando pelo localhost.
    return next();
  }

  console.log("senha:" + senha);

  //O usuario digitou a senha certa
  if (senha === process.env.SWAGGER_SENHA_DOC) {
    return next();
  }

  //O usuario digitou asenha errada
  if (
    senha !== process.env.SWAGGER_SENHA_DOC &&
    senha !==
      undefined /* Precisei colocar esta informação '&& senha !== undefined' pois estava mostrando a tela de senha errada mesmo sem ter digitado a senha antes */
  ) {
    res.status(401).set("Content-Type", "text/html"); // aqui retornaremos o status code 401 e estamos dizendo que vamos retornar um texto html
    res.send(
      Buffer.from(`
      <form method="post">
        <p style="color: red;">Senha incorreta.</p>
        <label for="senha">Seha da Documentação:</label>
        <input type="password" name="senha" id="senha" />
      </form> 
         `)
    );
    //este send é pra enviar algo como resposta
  } else {
    //Usuário que ainda não digitou a senha e está em modo produção
    res.status(200).set("Content-Type", "text/html"); // aqui retornaremos o status code 401 e estamos dizendo que vamos retornar um texto html
    res.send(
      Buffer.from(`
      <form method="post">
        <label for="senha">Seha da Documentação:</label>
        <input type="password" name="senha" id="senha" />
      </form>

    `)
    );
  }
}

module.exports = authDocProducao;
