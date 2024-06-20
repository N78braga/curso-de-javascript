/**
 * Este exports funciona com funções , classes, variáveis, weromfuction e objetos.

//Exportando uma function
  module.exports = function(x, y) {
    return x + y;
};

//exibindo o valor dentro do próprio modulo através console.log conforme o exemplo abaixo.
  console.log(module.exports(2, 2))

//Exportando um valor NUmber
  module.exports = 2;

  //Exportando uma classe
 */

  module.exports = class Cachorro {
    constructor(nome) {
      this.nome = nome;
    }
    latir() {
        console.log(`${this.nome} au au`);
    }
  }

