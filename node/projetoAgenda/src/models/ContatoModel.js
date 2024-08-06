const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, defalt: '' },
    email: { type: String, required: false, defalt: '' },
    telefone: { type: String, required: false, defalt: '' },
    criadoEm: { type: Date, default: Date.now }
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body){
 this.body = body;
 this.errors = [];
 this.contato = null;

}
Contato.BuscaId = async function(id){
    if(typeof id !== 'string') return;
    const user = await ContatoModel.findById(id);
    return user;
};

Contato.prototype.register = async function(){
    this.valida();
    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.create(this.body);
};

Contato.prototype.valida = function() {
    this.cleanUp();
    // Validação
    if (validator.isEmpty(this.body.email))
      this.errors.push("O e-mail e obrigatório");

    // O e-mail precisa se válido
    if (this.body.email && !validator.isEmail(this.body.email))
      this.errors.push("E-mail inválido");

    if(!this.body.nome)this.errors.push('Nome é obrigatório.');

    if(!this.body.email && !this.body.telefone){
        this.errors.push('Pelo menos um contato precisa ser enviardo: e-mail ou telefone.');
    }
  };


  Contato.prototype.cleanUp = function() {
    for (const key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }
    this.body = {
      nome: this.body.nome,
      sobrenome: this.body.sobrenome,
      email: this.body.email,
      telefone: this.body.telefone,
    };
  }

module.exports = Contato;