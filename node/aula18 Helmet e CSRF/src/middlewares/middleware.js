module.exports = (req, res, next) => {
  res.locals.variavelLocal = 'Este é o valor da variável locaol.';// ppode er qualquer coisa uma função um objetor
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

exports.checkErroCsrf = (err, req, res, next) => {
  if(err && 'EBADCSRFTOKEN' == err.code){
    return res.send('BAD CSRF');
  }
  // Podemos retornar o erro 404 conforme o padrão e o exemplo abaixo
  /**
   * if(err && 'EBADCSRFTOKEN' == err.code){
    return res.render('404');
  }
   */
}
exports.middlewareCsrf = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}