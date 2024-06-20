/**
 * Crie um algoritmo com três variável e depois 
 * faça que as variável troque os valores entre sir 
 * onde a primeira variável receba o valor da segunda 
 * à segunda receba o valor da terceira e a terceira 
 * receba o valor da primeira.
 */

let varA = 'A';
let varB = 'B';
let varC = 'C';

// forma classica de realizar a troca dos elementos das variáveis 
/*let varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;*/

[varA, varB, varC] = [varB, varC, varA];
console.log(`varA = ${varA}`);
console.log(`varB = ${varB}`);
console.log(`varC = ${varC}`);

