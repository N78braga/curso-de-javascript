/**
 * Trabalhando com aplicação com rota
 * exemplo uma rota -> //http://facebook.com/profiles/
 * na rota a unica coisa que muda e o paramêntro da rota ou seja ser http://facebook.com/profiles/123
 * neste caso o que foi mudado será o 123 que é o id
 * outro tipo de paramêntro que pode ser usado e o quyery string que é o que vem depois do primeiro /
 * para começa o quyery string tem que colocar o ?
 * exemplo http://facebook.com/profiles/?id=123?campanha=googleads
 * a quyery string é um par de chave e valor
 * Quando estive mas de quyery string que é um par de chave e valor eu uso o &
 * exemplo http://facebook.com/profiles/?id=123?campanha=googleads&nome_cqampanha=seila
 */



require('dotenv').config();

const express = require("express");
const send = require("send");
const app = express();
const moogoose = require("mongoose");


moogoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));

const routes = require("./routes");
const path = require("path");
const meuMiddleware = require("./src/middlewares/middleware");// exportando com o module.exports
// const {middlewareGlobal} = require('./src/middlewares/middleware'); exportando só com a função que e um middleware que será chamada globalmente

app.use(express.urlencoded({ extended: true }));

// app.use(express.static('./public')); Este é uma forma de definir o caminho das pastas passando o caminho relativo
app.use(express.static(path.resolve(__dirname, "public"))); // Este é uma forma de definir o caminho das pastas passando o caminho absoluto

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Nossos próprios middleware
//app.use(middlewareGlobal);exportando só com o exports
app.use(meuMiddleware);// exportando com o module.exports

app.use(routes);
app.on('pronto', () => {
  app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Server running on port 3000");
});
});

