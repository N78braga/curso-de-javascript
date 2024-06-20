/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPrropertyDescriptor(o, 'prop')
 * ...(spread)
 * 
 * // Já vimos
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperties (define uma propriedade)
 
const produto = {nome: 'caneca', preco: 1.8};
const outraCoisa = produto;// está apontando para o mesmo local de mémoria onde está alocado o produto
 const outraCoisa = {...produto};// spread opretion
 fazendo que a variável outraCoisa receba o objeto e não aponte para o mesmo local da mémoria
 podemos também criar mas objeto dentro do conste onde esta recebendo o spread opretion conforme o exemplo
 abaixo 

const outraCoisa = {
    ...produto, material: 'porcelana'

}; spread opretion

 Criando um objeto com o método assign() conforme o exemplo abaixo 
const caneca = Object.assign({}, produto, {material: 'pocelana'});

 Pegando só as propriedade do objeto conforme o exemplo abaixo
const caneca = {nome: produto.nome, preco: produto.preco};


 Como realizar uma descrição de uma chave de um objeto usando o getOwnPrropertyDescriptor conforme 
 o exemplo abaixo 
const produto = { nome: 'caneca', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
}); // alterando o valor de uma chave do objetor
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));


const produto = { nome: 'caneca', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
    value: 'Qualquer outra coisa',
    writable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);
*/

// Realizando um descontructor em um objeto usando entries em um for
const produto = { nome: 'caneca', preco: 1.8, material: 'pocelana'};
for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}