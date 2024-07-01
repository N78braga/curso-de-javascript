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

app.use(express.urlencoded({ extended: true })); // para poder usar o req.body para pegar os dados do navegador obs sempre 
// use o [app.use(express.urlencoded({ extended: true });] antes para tratar os dados do navegador

app.get('/', (req, res) => {
  // res.send(`
  //   <form action="/" method="POST">
  //   Nome do Cliente: <input type="text" name="nome"> podemos tratar o nome que esta sendo inputado como a chave do body
  //   <button>Enviar</button>
  //   </form>
  //   `);
 res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="qualquercoisa"><br> 
    outro campo: <input type="text" name="aquioutrocampo">
    <button>Enviar</button>
    </form>
    `);
});// N input na propriedade nome após o sinal de igual o paramêntro passa a ser a chave do body e o seu retorno vai ser -> qualquercoisa: 'Ernando'.
// Onde qualquer coisa é a chave  e o valor vai ser o que foi inputado no navegador.

// recebendo um paramêntro vindo do navegador
app.get('/testes/:idUsuarios?/:paramentro?', (req, res) => {
  // para torna o paramêntro ser opcional é só colocar o ? apos o nome do paramêntro.
  console.log(req.params);
  //res.send(req.params.idUsuarios); nesta forma estamos ten do acesso nos paramêntros pelo nome do 
  //paramêntro no url que esta vindo do navegador.
  console.log(req.query);
  // res.send(req.params);//desta forma ele vai mim retorna um json com os paramêntros vindo do navegador
  res.send(req.query.facebookprofile);// Realizando a sólicitação do perfil do facebook atrave do quyery string

});

// para realizar um post  do quyery string tem que ser sólicitado no bady
// app.post('/', (req, res) => {
//   console.log(req.body); // conforme este exemplo
//   // sólicitando que o express trate uma requisição que foi postada no body
//   res.send("Recebi o formulário");
// });
app.post('/', (req, res) => {
  console.log(req.body); 
  res.send(`O que foi enviado no formulário: ${req.body.qualquercoisa}`);
  // res.send(`O que foi enviado no formulário: ${req.body.nome}`);// Este nome que esta depois do ponto bady e o que este sendo inputado no formulário
  // atrve do req.body que vem do navegador.
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Server running on port 3000");
});
