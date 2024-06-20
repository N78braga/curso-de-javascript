// const nome = 'Pedro';
// const lastName = 'Miranda';

// const falaNome = () => `${nome} ${lastName}`

// // module.exports.nome = nome;
// // module.exports.lastName = lastName;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.lastName = lastName;
// exports.falaNome = falaNome;

class Pessoa {
    constructor(nome, lastName) {
        this.nome = nome;
        this.lastName = lastName;
    } 
}

exports.Pessoa = Pessoa;

