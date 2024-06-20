/** 
 * tipos de dados primitivos (Valores imutáveis) -> string, Number, 
 * boolean, undefined, null, (bigint, symbol) - valores copiados
 * 
 * tipos de dados por referência (valores mutáveis) -> array, object, function - passados por referência
 */

/* copiando um valor de um array para dentro de outra array conforme o exemplo abaixo
let a = [1, 2, 3];
let b = [...a]; // copiando o valor de a para dentro de b
console.log(a, b);*/

// Copiando valores de um objeto para outra variável ou outro objeto 
const a = {
  nome : 'Luiz',
  sobreNome: 'Otávio'
};
const b = {...a}; // passando o vaLor d objeto [a] para o objeto [b]

a.nome = 'João';
console.log(a);
console.log(b);

/*Fazendo uma variável aponta para o mesmo local
que o objeto esta apontando. Conforme o exemplo abaixo onde a 
variável [b] recebe o objeto [a]
a.nome = 'João'; 
const b = a; <- aqui
console.log(b);*/

/**
 * Em resumo o variáveis primitivo  eles realiza uma copia dos valores e são imutáveis
 * enquanto o objetos que são variáveis por referência aponta para o mesmo local da memória 
 * sendo referênciada o mesmo valores e elas são mutáveis. 
 */