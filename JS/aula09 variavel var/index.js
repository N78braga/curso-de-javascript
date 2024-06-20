/* quando é declarada uma variável com a VAR pode ser redeclara a mesma variável
usando outra vez o VAR conforme o exemplo abaixo.
*/
var nome = 'Luiz';
var nome = 'Otávio';
console.log(nome);
/**
 * Pois ela passar a sobre-escreve a variável que deixa de ser Luiz
 * para ser Otávio pore este problema foi corregido com LET que foi introduzido 
 * pela ECMAScript 2015 que é a versão(ES6) que não permite que 
 * declare uma variável com o mesmo nome. T ambém não pode ser criado variável sem um 
 * let ou const pois se for criado o indiner entenderá que é uma variável global e pode
 * quebra o código.
 */