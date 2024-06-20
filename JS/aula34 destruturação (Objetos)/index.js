/**
 * Atribuição via destruturação (Objetos)
 */
const pessoa = {
    nome: 'Luiz',
    sobreNome: 'Miranda',
    idade: 30,
    endereco:{
        rua: 'Av Brasil',
        numero: 320
    }
};
/*const {nome, sobreNome, idade} = pessoa; // usando a atribuição via destruturação
console.log(nome, sobreNome);*/

/* Usando um valor padrão em uma variável caso ela não venha existe
const {nome = '', sobreNome} = pessoa; // usando um valor padrão na variável nome
console.log(nome, sobreNome);*/

/* Chamando uma chave e atribuindo um nome diferente da chave.
const {nome: usuario, sobreNome} = pessoa; 
console.log(usuario, sobreNome);*/

/* Pegando os atributo de um objeto que está dentro de outro objeto
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);*/

/* Pegando os atributo de um objeto que está dentro de outro objeto e atribuindo nome as chave do objeto
const {endereco: {rua: r, numero: n}} = pessoa;
console.log(r, n);*/

/* Pegando os atributo de um objeto que está dentro de outro objeto e atribuindo um valor padrão
const {endereco: {rua: r = 12345, numero: n}} = pessoa;
console.log(r, n);*/

// Pegando o resto de uma propriedade do objeto
const {nome, ...resto} = pessoa;
console.log(nome, resto);
