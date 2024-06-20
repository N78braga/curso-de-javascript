/**
 * Classe é igual a função construtora porem a forma de escreve ela é que é diferente
 * da função construtora porem ela faz a mesma coisa ou seja de forma simplificada ela se comporta do 
 * mesmo.
 * 
 * Para criar uma class  usa-se o nome class depois o nome da class com a primeira letra inicializando 
 * com maiúscula conforme o exemplo abaixo.
 * 
 * class Pessoa{
 *    constructor(nome, sobreNome){
 *        this.nome = nome;
 *        this.sobreNome = sobreNome;
 *    }
 * }
 * 
 * const p1 = new Pessoa("Luiz", "Miranda");
 * console.log(p1);
 * 
 * Estamos vendo que dentro da class tem um método constructor o motivo que este constructor está dentro 
 * da class é que tem que ter este constructor para poder se trabalhar com os paramêntros da class conforme
 * vimos no exemplo acima.
 * 
 * Criando métodos dentro de uma class conforme estamo vendo no código abaixo 
 * o método falar, comer e o método beber foram criado e entre um método e o outro não foi
 * atribuido a virgula porque não é preciso da virgula para separar um método do outro dentro do constructor
 * Como também pode ser passado um paramêntro ou não dentro do método.
 * 
 * 
 * class Pessoa{
 *    constructor(nome, sobreNome){
 *        this.nome = nome;
 *        this.sobreNome = sobreNome;
 *    }
 *    
      falar(){
 *        console.log(`${this.nome} está falando. `);
 *    }
 * 
 *    comer(){
 *        console.log(`${this.nome} está comendo. `);
 *    }
 * 
 *    beber(){
 *        console.log(`${this.nome} está bebendo. `);
 *    }
 * }
 * 
 * const p1 = new Pessoa("Luiz", "Miranda");
 * console.log(p1);
 * 
 * 
 */

class Pessoa{ 
    constructor(nome, sobreNome){
        this.nome = nome;
        this.sobreNome = sobreNome;
    }

    falar(){
        console.log(`${this.nome} está falando. `);
    }

    comer(){
        console.log(`${this.nome} está comendo. `);
    }

    beber(){
        console.log(`${this.nome} está bebendo. `);
    }
}

function Pessoa2(nome, sobreNome){
    this.nome = nome;
    this.sobreNome = sobreNome;
}
Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando.`);
};
const p1 = new Pessoa("Luiz", "Miranda");
console.log(p1);
const p2 = new Pessoa2("Luiz", "Miranda");
console.log(p2);

