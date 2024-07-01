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

const express = require("express");
const send = require("send");
const app = express();
const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true })); 

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Server running on port 3000");
});
