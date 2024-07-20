module.exports = (req, res, next) => {
  next();
  //     if(req.body.cliente){
  //         req.body.cliente = req.body.cliente.replace('Nando', 'Não use nando');
  //        console.log();
  //        console.log(`Vi que você postou ${req.body.cliente}`);
  //        console.log();
  //    }
};

// Agora é só importar o middleware no arquivo server.js

// // podemos usar o middleware desta forma também
// exports.middlewareGlobal = (req, res, next) => {
//     next();
// } Onde estamos importando uma função que é um middleware que será chamada globalmente

// depois que você fiser este tipo de middleware var até o arquivo server.js
// e faça o require do middleware desta forma const {middlewareGlobal} = require('./src/middlewares/middleware');