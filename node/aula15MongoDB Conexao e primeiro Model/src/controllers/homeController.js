const HomeModel = require("../models/HomeModel");

HomeModel.create({
  titulo: 'Um titulo de testes',
  descricao: 'Um descricão de testes'
});

exports.paginaInicial = (req, res) => {
  // Esta forma chama o HTML que esta dentro da pasta views
  res.render("index");
  return; // posso usar o return para parar o fluxo da aplicação e mostrar uma mensagem na tela

  // exports.paginaInicial = (req, res, next) => {
  //   console.log('Respondendo ao cliente');
  //   res.render("index");
  //   console.log(`'Pagina inicial' Olha o que tem na req.session.nome ${req.session.nome}`);
  //   next();// Esta forma chama o HTML que esta dentro da pasta views e estou utilizando o next para chamar o proximo middleware no router

  // exports.paginaInicial = (req, res) => {
  //   // Esta forma chama o HTML que esta dentro da pasta views
  //   res.render("index");

  // Esta forma chama o HTML que esta dentro  da mesma pasta ou seja no mesmo arquyivo que esta dentro do send
  //   res.send(`
  //        <form action="/" method="POST">
  //        Nome do Cliente: <input type="text" name="qualquercoisa"><br>
  //        Outro campo: <input type="text" name="qualquercoisa"></input>
  //        <button>Enviar</button>
  //        </form>
  //        `);
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
