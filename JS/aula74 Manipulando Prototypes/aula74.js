/**
 * New object -> sabe que toda função construtora de um Object.prototype
 * 
 * const objtA = {
 * // vem de uma chave chamada de __proto__ que é o mesmo que __proto__:Object.prototype
 *   chaveA: 'A'
 * };
 * 
 * const objtB = {
 *   chaveB: 'B'
 * };
 * 
 * const objtC = {
 *   chave: 'C'
 * };
 * 
 * // Fazendo com que o objtB receba o objetA conforme o exemplo abaixo
 * 
 * //                    objtB = objtA
 * Object.setPrototypeOf(objtB, objtA);
 * 
 * //                    objtC = objtB
 * Object.setPrototypeOf(objtC, objtB);
 * 
 *obs: dentro do parêntese o objeto que vai recebe o outro fica no lado esquerdo conforme acima
 * neste caso o objtC vai passar pelo objtB para depois chega ao objtA pederiamos fazer com que o objtC
 * recebe-se direto o objtA sem te que passar pelo objtB conforme o exemplo abaixo
 * Object.setPrototypeOf(objtC, objtA);
 * 
 * // chamndo o objetB no  console
 * console.log(objtB.chaveA);
 * Criando um objeto literal conforme o exemplo abaixo
 * const objtC = new Object();
 * objtC.chaveC = 'C';
 * 
 * 
 */
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
 this.preco = this.preco - (this.preco * (percentual / 100));
};
Produto.prototype.aumento = function(percentual){ 
    this.preco = this.preco + (this.preco * (percentual / 100));
};
const p1 = new Produto('Camiseta', 50);
//p1.desconto(100);
p1.aumento(100);
console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);
console.log(p2);

/**
 * Criando um objeto literal e fazendo com que ele receba o prototype de outro object
 * conforme o exemplo abaixo
 * 
 * const p2 = {
 *   nome: 'Caneca',
 *   preco: 15
 * };
 * 
 * Object.setPrototypeOf(p2, Produto.prototype);
 * 
 * Fazendo que o Object receba já direto o prototype conforme o exemplo
 * const p3 = Object.create(Produtoprototype);
 * p3.preco = 113;
 * p3.aumento(10);
 * console.log(p3);
 * 
 * Setando os atributo já direto também conforme o exemplo abaixo
 * const p3 = Object.create(Produtoprototype,{
 * 
 *   preco: {
 *      writable: true,
 *      configurable: true,
 *      enumerable: true,
 *      value: 113
 * },
 * *   tamanho2: {
 *      writable: true,
 *      configurable: true,
 *      enumerable: true,
 *      value: 43
 * },
 * });
 */