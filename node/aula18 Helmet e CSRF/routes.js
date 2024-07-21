const express = require("express");
const router = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

// construindo um Middleware que esta sendo utilizado na aplicação conforme o exemplo abaixo
// function meuMiddleware(req, res, next) {
//     res.session = {nome: 'Marcos', sobrenome: 'Santos'};
//     console.log();
//     console.log(`'Fim do Middleware' Olha o que tem na req.session.nome ${req.session.nome}`);
//     console.log('Passei pelo meu middleware');
//     console.log();
//     next(); // chama o outro middleware que esta sendo executado no proximo arquivo ou
//            //seja chama o proximo middleware que é homeController.paginaicial
//}
// Se a sua aplicação estiver com muitos Middleware o ideal será criar uma pasta Middleware e dentro dela criar os arquivo middleware.js

// Rotas da Home
router.get("/", homeController.paginaInicial);
router.post("/", homeController.trataPost);
//router.get("/", meuMiddleware, homeController.paginaInicial);
// router.get("/", homeController.paginaInicial);

// Rotas de Contatos
router.get("/contato", contatoController.paginaInicial);
module.exports = router;
