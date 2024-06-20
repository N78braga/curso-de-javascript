/**
 * Manipulando número
 * e o padrão para realização de uma soma bem precisa é o IEEE 754-2008
 */

let num1 = 10.57895512555547;
let num2 = 2.5;

// passando um número para uma string conforme o exemplo abaixo
// console.log(num1.toString() + num2); // passando o num1 para string e concatenando com num2
// num1 = num1.toString(); passando uma variável do tipo número para string definitivo.
console.log(num1.toString(2)); // Transformando o número para binário

num1 = 10;
console.log(num1.toFixed(2)); // formatando para 2 casa decimais o valor 10.57895512555547

num1 = 10;
console.log(Number.isInteger(num1)); // Este método realiza a verificação se o número é inteiro retornando true ou false.  

let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); // Este método realiza a verificação se a soma é válida é NaN retornando true para inválida ou false válida

// Para passar um número onde ele quebra devido a casa decimal basta fazer o exemplo abaixo
 num1 = 0.7;
 num2 = 0.1;

 console.log(num1 + num2);// Não realizar a soma do valor inteiro a soma sai 0.79999999999 e não 0.8
// para que o número saia 0.8 basta seguir o exemplo abixo
num1 += num2;
num1 += num2;
num1 += num2;
console.log(parseFloat(num1.toFixed(2)));// realizando a soma do valor inteiro sem está fracionado a saida vai ser 1