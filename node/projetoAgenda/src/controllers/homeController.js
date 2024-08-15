// const Contato = require('../models/ContatoModel');

// exports.index = async(req, res) => {
//   const contatos = await Contato.buscaContatos();
//   res.render('index', { contatos });
// };const Contato = require('../models/ContatoModel');
const Contato = require('../models/ContatoModel');
exports.index = async(req, res) => {
  const contatos = await Contato.buscaContatos();
  res.render('index', { contatos });
};

