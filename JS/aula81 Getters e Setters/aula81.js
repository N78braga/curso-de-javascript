/**
 * Conhecendo o comportamento do Getters e dos Setters dentro das class
 * 
 * const velocidadeMax = Symbol('velocidade');
class Carro{
    constructor(nome){
        this.nome = nome;
        this[velocidadeMax] = 0;
    }

    set velocidade(valor){
        if(typeof valor !== "number") return;
        if(valor > 100 || valor <= 0) return;
        this[velocidadeMax] = valor;
    }

    get velocidade(){
        return this[velocidadeMax];
    }

    acelerar(){
        if(this[velocidadeMax] >= 100) return;
        this[velocidadeMax]++;
    }
    desacelerar(){
        if(this[velocidadeMax] <= 0) return;
        this[velocidadeMax]--;
    }

}
 const carro = new Carro('Fusca');
// for(let i =  0; i <= 200; i++){
//     carro.acelerar();
// }
carro.velocidade = 100;
console.log(carro.velocidade);
 */


class Pessoa{
    constructor(firstName, lastNome){
        this.firstName = firstName;
        this.lastNome = lastNome;
    }

    get fullName(){
        return `${this.firstName} ${this.lastNome}`;

    }

    set fullName(valor){
        valor = valor.split(" ");
        this.nome = valor.shift();
        this.lastNome = valor.join(" ");
    }
}

const pessoa = new Pessoa("Ernando", "Braga");
pessoa.fullName = "Ernando Braga";

console.log(pessoa.fullName);